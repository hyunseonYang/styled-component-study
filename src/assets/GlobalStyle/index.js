import { createGlobalStyle } from 'styled-components'
import Font from 'assets/Font'
import Color from 'elements/Color'
import { Z_INDEX } from 'utils/styleUtils'
import ReactCSSTransitions from './ReactCSSTransitions'

const GlobalStyle = createGlobalStyle`
@font-face {
	font-weight: 300;
	font-family: 'NanumSquare';
	src: url(${Font.nanumSquareLight}) format("truetype");
}
@font-face {
	font-weight: 400;
	font-family: 'NanumSquare';
	src: url(${Font.nanumSquareRegular}) format("truetype");
}
@font-face {
	font-weight: 700;
	font-family: 'NanumSquare';
	src: url(${Font.nanumSquareBold}) format("truetype");
}
@font-face {
	font-weight: 900;
	font-family: 'NanumSquare';
	src: url(${Font.nanumSquareExtraBold}) format("truetype");
}
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
dl,
dd,
button {
  margin: 0;
  padding: 0;
}
body {
  background-color: #e9ecef;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  line-height: 1.15;
  color: #424242;
  letter-spacing: -0.3px;
  word-break: break-all;
}
html,
body,
#root {
  height: 100%;
}
#root {
  position: relative;
  min-width: 320px;
}
ul {
  list-style: none;
}
ol {
  list-style: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  -webkit-padding-start: 0;
}
li {
  display: block;
}
pre {
  margin: 0;
  font-family: inherit;
}
hr {
  margin: 18px 0;
  border: none;
  border-top: 1px solid ${Color.borderLight};
}
/* Button, Anchor tag */
button {
  background-color: transparent;
  border: none;
  font-size: inherit;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}
:disabled,
a {
  opacity: 0.6;
  cursor: default;
}
[role="button"],
a:link,
a:visited {
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
}
a,
a:active,
button,
button:active {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
}
/* Inline tags */
em,
i {
  font-style: normal;
}
b {
  font-weight: bold;
}
/* Form tags */
input {
  border: none;
  border-radius: 0;
  -webkit-border-radius:0;
  appearance: none;
  -webkit-appearance: none;
}
:focus,
input:focus {
  outline: none;
}
select {
  border: none;
  border-radius: 0;
  -webkit-border-radius:0;
  appearance: none;
  -webkit-appearance: none;
}
fieldset {
  min-width: initial;
  border: none;
  padding: 0;
  margin: 0;
}
textarea {
  display: block;
  width: 100%;
  height: 180px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  -webkit-border-radius:0;
  appearance: none;
  -webkit-appearance: none;
  resize: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
}
::-webkit-input-placeholder {
  color: #a9a9a9;
}
/* Util Classes */
.blind {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -1px;
  width: 1px;
  height: 1px;
}
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
.is_reversed {
  transform: rotate3d(0, 0, 1, -180deg);
}
.font_nanum_square {
  font-family: 'NanumSquare', sans-serif;
}
.color_mainText {
  color: ${Color.mainText};
}
.color_subText {
  color: ${Color.subText};
}
.color_red {
  color: ${Color.red};
}
.color_blue {
  color: ${Color.blue};
}
.color_green {
  color: ${Color.greenDark};
}
/* 소트할 때 스타일  */
.sortableHelper {
  position: relative;
  z-index: 10000;
  opacity: 0.9;
  background-color: #fff;
}
.sortableHelper_list {
  position: relative;
  z-index: 10000;
  opacity: 0.9;
  background-color: #fff;
  border-top: 1px solid ${Color.borderOuter};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.hide_overflow {
  position: relative;
  overflow: hidden;
  body {
    position: relative;
    overflow: hidden;
  }
}
/* suggestion container styles */
.suggestion #inner_main {
  padding-top: 50px; 
  padding-bottom: 52px;
  box-sizing: border-box;
}
.suggestion.version_pc #inner_main {
  padding-top: 0;
  font-family: 'NanumSquare', sans-serif; 
}
.suggestion.set_height {
  height: 100%;
  #inner_main {
    height: 100%;
    box-sizing: border-box;
  }
}
.suggestion.add_padding_top #inner_main {
  padding-top: calc(50px + 43px);
}
.suggestion.version_pc.add_padding_top #inner_main {
  padding-top: calc(60px + 50px);
}
/* suggestion navigation style */
.suggestion {
  [role="menubar"]::before {
    content: '';
    width: 20px;
    height: 42px;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: ${Z_INDEX.dimmed - 1};
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+23,ffffff+100&1+23,0+100 */
    background: -moz-linear-gradient(left, rgba(255,255,255,1) 23%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 23%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(255,255,255,1) 23%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  [role="menubar"]::after {
    content: '';
    width: 20px;
    height: 42px;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: ${Z_INDEX.dimmed - 1};
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+77&0+0,1+77 */
    background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 77%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 77%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 77%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  [role="menubar"]::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }
}
.suggestion.version_pc {
  [role="menubar"] {
    overflow: hidden !important;
  }
  
  [role="menubar"]::after,
  [role="menubar"]::before {
    content: none;
  }
}
${ReactCSSTransitions}
`

export default GlobalStyle