(ns mandelbrot.core)

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

(defn scale [num max s]
  (-> num
      (- (/ max 2))
      (* s)
      (/ max)))

(defn get-color [iterations]
  (let [base (max 0 (- iterations 5))]
    (str "rgba(0, 0, 0, " (/ base 20) ")")))


(defn render [ctx width height block-size current-scale]
  (.clearRect ctx 0 0 width height)

  (doseq [x (range (/ width block-size))
          y (range (/ height block-size))]

    (let [scaled-x (scale (- x -3) (/ width block-size) current-scale)
          scaled-y (scale y (/ height block-size) current-scale)]

      (->> (calculate-iterations scaled-x scaled-y)
           (get-color)
           (set! (.-fillStyle ctx)))

      (.fillRect ctx (* block-size x) (* block-size y) block-size block-size))))


(defn ^:export run []
  (let [canvas (js/document.getElementById "app")
        ctx (.getContext canvas "2d")
        width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        time-start (.now js/Date)]

    (set! (.-width canvas) width)
    (set! (.-height canvas) height)

    (render ctx width height 1 4)
    (println (- (.now js/Date) time-start))))
