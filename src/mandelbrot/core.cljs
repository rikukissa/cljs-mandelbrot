(ns mandelbrot.core)

(enable-console-print!)

(def max-iterations 100)

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

(defn scale [num max scl]
  (-> num
      (- (/ max 2))
      (* scl)
      (/ max)))

(defn get-color [iterations]
  (let [base (/ iterations max-iterations)]
    (str "rgba(0, 0, 0, " base ")")))


(defn render [ctx width height size scl]
  (.clearRect ctx 0 0 width height)

  (doseq [i (range (/ width size))
          j (range (/ height size))]

    (let [x (scale (- i (/ 150 scl)) (/ width size) scl)
          y (scale j (/ height size) scl)
          iterations (calculate-iterations x y)]

      (if (> iterations 0)
        (do (->> (get-color iterations)
                 (set! (.-fillStyle ctx)))
            (.fillRect ctx (* size i) (* size j) size size)))))

    (js/requestAnimationFrame #(render ctx width height size (* scl 0.99))))


(defn ^:export run []
  (let [canvas (js/document.getElementById "app")
        ctx (.getContext canvas "2d")
        width 400
        height 400
        time-start (.now js/Date)]

    (set! (.-width canvas) width)
    (set! (.-height canvas) height)

    (render ctx width height 4 10)
    (println (- (.now js/Date) time-start))))
