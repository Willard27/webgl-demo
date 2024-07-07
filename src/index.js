import frag from './shader/index.frag';
import vert from './shader/index.vert';
import { createProgram, createShader, randomColor } from './util';

var canvas = document.querySelector('#canvas')
// 兼容性判断
var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

console.log(gl)

// 流程1: 创建顶点着色器对象
// const vertexShader = gl.createShader(gl.VERTEX_SHADER);

// gl.shaderSource(vertexShader, vert);

// gl.compileShader(vertexShader)

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vert);
// 流程2: 创建片元着色器对象
// const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// gl.shaderSource(fragmentShader, frag);

// gl.compileShader(fragmentShader)

const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, frag);

// 流程3
// const program = gl.createProgram();

// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);

const program = createProgram(gl, vertexShader, fragmentShader)
gl.useProgram(program);

const point = [];

const a_position = gl.getAttribLocation(program, 'a_position');
const a_screen_size = gl.getAttribLocation(program, 'a_screen_size');
const u_color = gl.getUniformLocation(program, 'u_color');

gl.vertexAttrib2f(a_screen_size, canvas.width, canvas.height);

canvas.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const color = randomColor();

    point.push({
        x,
        y,
        color
    })

    // 清空画布
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 传入上一次的颜色
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (let i = 0; i < point.length; i++) {
        const color = point[i].color;


        gl.uniform4f(u_color, color.r, color.g, color.b, color.a);

        console.log(i)
        gl.vertexAttrib2f(a_position, point[i].x, point[i].y);
        // 绘制
        gl.drawArrays(gl.POINTS, 0, 1)

    }


})


// 清空画布
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 传入上一次的颜色
gl.clear(gl.COLOR_BUFFER_BIT);
