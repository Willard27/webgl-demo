import frag from './shader/index.frag';
import vert from './shader/index.vert';

var canvas = document.querySelector('#canvas')
// 兼容性判断
var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

console.log(gl)

// 流程1: 创建顶点着色器对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertexShader, vert);

gl.compileShader(vertexShader)

// 流程2: 创建片元着色器对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragmentShader, frag);

gl.compileShader(fragmentShader)

// 流程3
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 传入上一次的颜色
gl.clear(gl.COLOR_BUFFER_BIT);

// 绘制
gl.drawArrays(gl.POINTS, 0, 1);