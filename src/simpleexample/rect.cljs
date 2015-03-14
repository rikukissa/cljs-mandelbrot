(ns simpleexample.rect)

(defn- get-random-speed []
  (+ -1 (* (js/Math.random) 3)))

(defn create [] ;get REKT
  { :dimensions {:width 10
                 :height 10 }
    :position {:x 50
               :y 50 }
    :speed {:x (get-random-speed)
            :y (get-random-speed)}})

