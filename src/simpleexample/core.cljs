(ns simpleexample.core)

(enable-console-print!)

(def max-iterations 24)

(defn calculate-iterations
  ([x y] (calculate-iterations x y 0 0 0))
  ([real imaginary x y i]
    (if (or (>= i max-iterations)
            (> (+ (* x x) (* y y)) 4))
      i
      (calculate-iterations real
           imaginary (+ real (- (* x x) (* y y)))
                     (+ imaginary (* 2 x y))
                     (inc i)))))

(defn scale [num max]
  (-> num
      (- (/ max 2))
      (* 4)
      (/ max)))


(defn get-color [iterations]
  (let [base (max 0 (- iterations 5))]
    (str "rgba(0, 0, 0, " (/ base 20) ")")))


(defn render [ctx]
  (let [
    canvas (.-canvas ctx)
    width (.-width canvas)
    height (.-height canvas)]
    (.clearRect ctx 0 0 width height)

    (doseq [x (range width)
            y (range height)]

      (let [scaled-x (scale x width)
            scaled-y (scale y width)]

        (->> (calculate-iterations scaled-x scaled-y)
             (get-color)
             (set! (.-fillStyle ctx)))

        (.fillRect ctx x y 1 1)))))


(defn ^:export run []
  (let [canvas (js/document.getElementById "app")
        ctx (.getContext canvas "2d")]

    (set! (.-width canvas) (.-innerWidth js/window))
    (set! (.-height canvas) (.-innerHeight js/window))

    (render ctx)))
