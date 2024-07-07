precision mediump float;

attribute vec4 u_color;

// 片元着色器
void main(){
    vec4 color = u_color / vec4(255, 255, 255, 1);

    gl_FragColor = color;
}