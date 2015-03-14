(ns simpleexample.core)

(defn render [ctx rects]
  (let [
    canvas (.-canvas ctx)
    width (.-width canvas)
    height (.-height canvas)]
    (.clearRect ctx 0 0 width height)
    (doseq [rect rects]
      (.fillRect ctx
        (get-in rect [:position :x])
        (get-in rect [:position :y])
        10 10))))

(defn out-of-bounds?
  ([rect] (some (partial out-of-bounds? rect) [:x :y]))
  ([rect axis]
    (or (> (get-in rect [:position axis]) 200)
        (< (get-in rect [:position axis]) 0))))

(defn bounce
  ([rect] (-> rect
              (bounce :x)
              (bounce :y)))
  ([rect axis]
    (if (out-of-bounds? rect axis)
      (update-in rect [:speed axis] #(* % -1))
      rect)))

(defn update-axis [rect axis]
  (update-in rect [:position axis]
    #(+ % (get-in rect [:speed axis]))))

(defn move [rect]
  (let [rect (bounce rect)]
    (reduce update-axis rect [:x :y])))

(def move-all (partial map move))

(defn update-world [ctx rects]
  (render ctx rects)
  (js/requestAnimationFrame
    #(update-world ctx (move-all rects))))

(defn get-random-speed []
  (+ -1 (* (js/Math.random) 3)))

(defn get-rect [] ;get REKT
  { :position {:x 50
               :y 50 }
    :speed {:x (get-random-speed)
            :y (get-random-speed)}})

(defn ^:export run []
  (let [canvas (js/document.getElementById "app")
        ctx (.getContext canvas "2d")]

    (set! (.-width canvas) (.-innerWidth js/window))
    (set! (.-height canvas) (.-innerHeight js/window))

    (update-world ctx (list (get-rect) (get-rect)))))
