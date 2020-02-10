uniform sampler2D _7;
uniform sampler2D _6;
uniform sampler2D _5;
uniform sampler2D _4;
uniform sampler2D _3;
uniform sampler2D _2;
uniform sampler2D _1;

varying vec2 vUV;

varying float vAmount;

void main() 
{

	vec4 _07 = (smoothstep(0.01, 0.15, vAmount) - smoothstep(0.15, 0.25, vAmount)) * texture2D( _7, vUV * 5.0 );
	vec4 _06 = (smoothstep(0.15, 0.25, vAmount) - smoothstep(0.25, 0.30, vAmount)) * texture2D( _6, vUV * 5.0 );
	vec4 _05 = (smoothstep(0.25, 0.30, vAmount) - smoothstep(0.30, 0.40, vAmount)) * texture2D( _5, vUV * 5.0 );
	vec4 _04 = (smoothstep(0.30, 0.40, vAmount) - smoothstep(0.40, 0.50, vAmount)) * texture2D( _4, vUV * 5.0 );
	vec4 _03 = (smoothstep(0.40, 0.50, vAmount) - smoothstep(0.50, 0.75, vAmount)) * texture2D( _3, vUV * 5.0 );
	vec4 _02 = (smoothstep(0.50, 0.75, vAmount) - smoothstep(0.75, 0.95, vAmount)) * texture2D( _2, vUV * 5.0 );
	vec4 _01 = (smoothstep(0.75, 0.95, vAmount)) * texture2D( _1, vUV * 5.0 );
	gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0)  + _07 + _06 + _05 + _04 +_03 + _02 + _01; 
} 


