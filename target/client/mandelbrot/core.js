// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('mandelbrot.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_();
mandelbrot.core.max_iterations = (100);
mandelbrot.core.calculate_iterations = (function() {
var calculate_iterations = null;
var calculate_iterations__2 = (function (x,y){
return calculate_iterations.cljs$core$IFn$_invoke$arity$5(x,y,(0),(0),(0));
});
var calculate_iterations__5 = (function (real,imaginary,x,y,i){
if(((i >= mandelbrot.core.max_iterations)) || ((((x * x) + (y * y)) > (4)))){
return i;
} else {
return calculate_iterations.cljs$core$IFn$_invoke$arity$5(real,imaginary,(real + ((x * x) - (y * y))),(imaginary + (((2) * x) * y)),(i + (1)));
}
});
calculate_iterations = function(real,imaginary,x,y,i){
switch(arguments.length){
case 2:
return calculate_iterations__2.call(this,real,imaginary);
case 5:
return calculate_iterations__5.call(this,real,imaginary,x,y,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
calculate_iterations.cljs$core$IFn$_invoke$arity$2 = calculate_iterations__2;
calculate_iterations.cljs$core$IFn$_invoke$arity$5 = calculate_iterations__5;
return calculate_iterations;
})()
;
mandelbrot.core.scale = (function scale(num,max,scl){
return (((num - (max / (2))) * scl) / max);
});
mandelbrot.core.get_color = (function get_color(iterations){
var base = (iterations / mandelbrot.core.max_iterations);
return [cljs.core.str("rgba(0, 0, 0, "),cljs.core.str(base),cljs.core.str(")")].join('');
});
mandelbrot.core.render = (function render(ctx,width,height,size,scl){
ctx.clearRect((0),(0),width,height);

var seq__9888_9901 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((width / size)));
var chunk__9893_9902 = null;
var count__9894_9903 = (0);
var i__9895_9904 = (0);
while(true){
if((i__9895_9904 < count__9894_9903)){
var i_9905 = chunk__9893_9902.cljs$core$IIndexed$_nth$arity$2(null,i__9895_9904);
var seq__9896_9906 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((height / size)));
var chunk__9897_9907 = null;
var count__9898_9908 = (0);
var i__9899_9909 = (0);
while(true){
if((i__9899_9909 < count__9898_9908)){
var j_9910 = chunk__9897_9907.cljs$core$IIndexed$_nth$arity$2(null,i__9899_9909);
var x_9911 = mandelbrot.core.scale((i_9905 - ((150) / scl)),(width / size),scl);
var y_9912 = mandelbrot.core.scale(j_9910,(height / size),scl);
var iterations_9913 = mandelbrot.core.calculate_iterations.cljs$core$IFn$_invoke$arity$2(x_9911,y_9912);
if((iterations_9913 > (0))){
ctx.fillStyle = mandelbrot.core.get_color(iterations_9913);

ctx.fillRect((size * i_9905),(size * j_9910),size,size);
} else {
}

var G__9914 = seq__9896_9906;
var G__9915 = chunk__9897_9907;
var G__9916 = count__9898_9908;
var G__9917 = (i__9899_9909 + (1));
seq__9896_9906 = G__9914;
chunk__9897_9907 = G__9915;
count__9898_9908 = G__9916;
i__9899_9909 = G__9917;
continue;
} else {
var temp__4126__auto___9918 = cljs.core.seq(seq__9896_9906);
if(temp__4126__auto___9918){
var seq__9896_9919__$1 = temp__4126__auto___9918;
if(cljs.core.chunked_seq_QMARK_(seq__9896_9919__$1)){
var c__4593__auto___9920 = cljs.core.chunk_first(seq__9896_9919__$1);
var G__9921 = cljs.core.chunk_rest(seq__9896_9919__$1);
var G__9922 = c__4593__auto___9920;
var G__9923 = cljs.core.count(c__4593__auto___9920);
var G__9924 = (0);
seq__9896_9906 = G__9921;
chunk__9897_9907 = G__9922;
count__9898_9908 = G__9923;
i__9899_9909 = G__9924;
continue;
} else {
var j_9925 = cljs.core.first(seq__9896_9919__$1);
var x_9926 = mandelbrot.core.scale((i_9905 - ((150) / scl)),(width / size),scl);
var y_9927 = mandelbrot.core.scale(j_9925,(height / size),scl);
var iterations_9928 = mandelbrot.core.calculate_iterations.cljs$core$IFn$_invoke$arity$2(x_9926,y_9927);
if((iterations_9928 > (0))){
ctx.fillStyle = mandelbrot.core.get_color(iterations_9928);

ctx.fillRect((size * i_9905),(size * j_9925),size,size);
} else {
}

var G__9929 = cljs.core.next(seq__9896_9919__$1);
var G__9930 = null;
var G__9931 = (0);
var G__9932 = (0);
seq__9896_9906 = G__9929;
chunk__9897_9907 = G__9930;
count__9898_9908 = G__9931;
i__9899_9909 = G__9932;
continue;
}
} else {
}
}
break;
}

var G__9933 = seq__9888_9901;
var G__9934 = chunk__9893_9902;
var G__9935 = count__9894_9903;
var G__9936 = (i__9895_9904 + (1));
seq__9888_9901 = G__9933;
chunk__9893_9902 = G__9934;
count__9894_9903 = G__9935;
i__9895_9904 = G__9936;
continue;
} else {
var temp__4126__auto___9937 = cljs.core.seq(seq__9888_9901);
if(temp__4126__auto___9937){
var seq__9888_9938__$1 = temp__4126__auto___9937;
if(cljs.core.chunked_seq_QMARK_(seq__9888_9938__$1)){
var c__4593__auto___9939 = cljs.core.chunk_first(seq__9888_9938__$1);
var G__9940 = cljs.core.chunk_rest(seq__9888_9938__$1);
var G__9941 = c__4593__auto___9939;
var G__9942 = cljs.core.count(c__4593__auto___9939);
var G__9943 = (0);
seq__9888_9901 = G__9940;
chunk__9893_9902 = G__9941;
count__9894_9903 = G__9942;
i__9895_9904 = G__9943;
continue;
} else {
var i_9944 = cljs.core.first(seq__9888_9938__$1);
var seq__9889_9945 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((height / size)));
var chunk__9890_9946 = null;
var count__9891_9947 = (0);
var i__9892_9948 = (0);
while(true){
if((i__9892_9948 < count__9891_9947)){
var j_9949 = chunk__9890_9946.cljs$core$IIndexed$_nth$arity$2(null,i__9892_9948);
var x_9950 = mandelbrot.core.scale((i_9944 - ((150) / scl)),(width / size),scl);
var y_9951 = mandelbrot.core.scale(j_9949,(height / size),scl);
var iterations_9952 = mandelbrot.core.calculate_iterations.cljs$core$IFn$_invoke$arity$2(x_9950,y_9951);
if((iterations_9952 > (0))){
ctx.fillStyle = mandelbrot.core.get_color(iterations_9952);

ctx.fillRect((size * i_9944),(size * j_9949),size,size);
} else {
}

var G__9953 = seq__9889_9945;
var G__9954 = chunk__9890_9946;
var G__9955 = count__9891_9947;
var G__9956 = (i__9892_9948 + (1));
seq__9889_9945 = G__9953;
chunk__9890_9946 = G__9954;
count__9891_9947 = G__9955;
i__9892_9948 = G__9956;
continue;
} else {
var temp__4126__auto___9957__$1 = cljs.core.seq(seq__9889_9945);
if(temp__4126__auto___9957__$1){
var seq__9889_9958__$1 = temp__4126__auto___9957__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9889_9958__$1)){
var c__4593__auto___9959 = cljs.core.chunk_first(seq__9889_9958__$1);
var G__9960 = cljs.core.chunk_rest(seq__9889_9958__$1);
var G__9961 = c__4593__auto___9959;
var G__9962 = cljs.core.count(c__4593__auto___9959);
var G__9963 = (0);
seq__9889_9945 = G__9960;
chunk__9890_9946 = G__9961;
count__9891_9947 = G__9962;
i__9892_9948 = G__9963;
continue;
} else {
var j_9964 = cljs.core.first(seq__9889_9958__$1);
var x_9965 = mandelbrot.core.scale((i_9944 - ((150) / scl)),(width / size),scl);
var y_9966 = mandelbrot.core.scale(j_9964,(height / size),scl);
var iterations_9967 = mandelbrot.core.calculate_iterations.cljs$core$IFn$_invoke$arity$2(x_9965,y_9966);
if((iterations_9967 > (0))){
ctx.fillStyle = mandelbrot.core.get_color(iterations_9967);

ctx.fillRect((size * i_9944),(size * j_9964),size,size);
} else {
}

var G__9968 = cljs.core.next(seq__9889_9958__$1);
var G__9969 = null;
var G__9970 = (0);
var G__9971 = (0);
seq__9889_9945 = G__9968;
chunk__9890_9946 = G__9969;
count__9891_9947 = G__9970;
i__9892_9948 = G__9971;
continue;
}
} else {
}
}
break;
}

var G__9972 = cljs.core.next(seq__9888_9938__$1);
var G__9973 = null;
var G__9974 = (0);
var G__9975 = (0);
seq__9888_9901 = G__9972;
chunk__9893_9902 = G__9973;
count__9894_9903 = G__9974;
i__9895_9904 = G__9975;
continue;
}
} else {
}
}
break;
}

var G__9900 = (function (){
return render(ctx,width,height,size,(scl * 0.99));
});
return requestAnimationFrame(G__9900);
});
mandelbrot.core.run = (function run(){
var canvas = (function (){var G__9977 = "app";
return document.getElementById(G__9977);
})();
var ctx = canvas.getContext("2d");
var width = (400);
var height = (400);
var time_start = Date.now();
canvas.width = width;

canvas.height = height;

mandelbrot.core.render(ctx,width,height,(4),(4));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(Date.now() - time_start)], 0));
});
goog.exportSymbol('mandelbrot.core.run', mandelbrot.core.run);
