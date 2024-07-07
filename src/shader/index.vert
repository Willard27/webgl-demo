// 定义浮点精度
precision mediump float;

// 接收 canvas 坐标参数
attribute vec2 a_position;

// 接收 canvas 宽高
attribute vec2 a_screen_size;

void main() {

    vec2 position = (a_position / a_screen_size) * 2.0 - 1.0;

    position = position * vec2(1.0, -1.0);

    // 点的位置
    gl_Position = vec4(position, 0.0, 1.0);
    // 点的大小
    gl_PointSize = 10.0;

}