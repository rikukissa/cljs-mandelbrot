(ns mandelbrot.dev
  (:require [mandelbrot.core :as mandelbrot]
            [figwheel.client :as fw]))

(fw/start {:on-jsload mandelbrot/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})
