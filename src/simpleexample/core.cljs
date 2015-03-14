(ns simpleexample.core)

(defn render [ctx rects]
  (let [
    canvas (.-canvas ctx)
    width (.-width canvas)
    height (.-height canvas)]
    (.clearRect ctx 0 0 width height)
    (doseq [rect rects]
      (.fillRect ctx (:x rect) (:y rect) 10 10))))

(defn out-of-bounds?
  ([rect] (not (or
    (out-of-bounds? rect :x)
    (out-of-bounds? rect :y))))
  ([rect axis]
    (or (> (axis rect) 200)
        (< (axis rect) 0))))

(defn clamp [{:keys [x y speed] :as rect}]
  (assoc rect :x (max (min x 200) 0)
              :y (max (min y 200) 0)))

(defn bounce
  ([rect] (-> rect
              (bounce :x)
              (bounce :y)))
  ([rect axis]
    (if (out-of-bounds? rect axis)
      (update-in rect [:speed axis] #(* % -1))
      rect)))

(defn move [rect]
  (let [rect (bounce rect)]

    (assoc rect :x (+ (:x rect) (get-in rect [:speed :x]))
                :y (+ (:y rect) (get-in rect [:speed :y])))))

(def move-all (partial map move))

(defn update-world [ctx rects]
  (render ctx rects)
  (js/setTimeout
    #(update-world ctx (move-all rects))
    10))

(defn get-random-speed []
  (+ -1 (* (js/Math.random) 2)))

(defn ^:export run []
  (let [canvas (js/document.getElementById "app")
        ctx (.getContext canvas "2d")]

    (set! (.-width canvas) (.-innerWidth js/window))
    (set! (.-height canvas) (.-innerHeight js/window))

    (update-world ctx (list
      { :x 50, :y 50 :speed {
                      :x (get-random-speed)
                      :y (get-random-speed)}}

      { :x 50, :y 50 :speed {
                      :x (get-random-speed)
                      :y (get-random-speed)
                      }}))))
