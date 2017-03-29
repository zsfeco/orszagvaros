function orszag () {
var a = Math.random();
var b = Math.round(a*30+1);
if (b==1){
  var font="a";
}else if (b==2){
  var font="á";
}else if (b==3){
  var font="b";
}else if (b==4){
  var font="c";
}else if (b==5){
  var font="cs";
}else if (b==6){
  var font="d";
}else if (b==7){
  var font="e";
}else if (b==8){
  var font="é";
}else if (b==9){
  var font="f";
}else if (b==10){
  var font="g";
}else if (b==11){
  var font="gy";
}else if (b==12){
  var font="h";
}else if (b==13){
  var font="i,í";
}else if (b==14){
  var font="j";
}else if (b==15){
  var font="k";
}else if (b==16){
  var font="l";
}else if (b==17){
  var font="m";
}else if (b==18){
  var font="n";
}else if (b==19){
  var font="ny";
}else if (b==20){
  var font="o,ó";
}else if (b==21){
  var font="ö,ő";
}else if (b==22){
  var font="p";
}else if (b==23){
  var font="r";
}else if (b==24){
  var font="s";
}else if (b==25){
  var font="sz";
}else if (b==26){
  var font="t";
}else if (b==27){
  var font="u,ú";
}else if (b==28){
  var font="ü,ű";
}else if (b==29){
  var font="v";
}else if (b==30){
  var font="z";
}else if (b==31){
  var font="zs";
}
document.getElementById("letter").innerHTML = font;
return;
};
orszag();
