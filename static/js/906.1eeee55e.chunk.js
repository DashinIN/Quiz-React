"use strict";(self.webpackChunktesti=self.webpackChunktesti||[]).push([[906],{906:function(e,n,s){s.r(n),s.d(n,{default:function(){return C}});s(791);var t={wrapper:"QuestionVariants_wrapper__-twKV",variant:"QuestionVariants_variant__U+eLc",title:"QuestionVariants_title__hItq2"},a=s(184),i=function(e){var n=e.question,s=e.onClickVariant;return(0,a.jsxs)("div",{className:t.wrapper,children:[(0,a.jsxs)("h2",{className:t.title,children:[" ",n.title," "]}),(0,a.jsx)("ul",{children:n.variants.map((function(e,n){return(0,a.jsx)("li",{className:t.answer,onClick:function(){return s(n)},children:(0,a.jsx)("button",{className:t.variant,children:e})},e)}))})]})},r="ResComment_wrapper__GzAMI",c="ResComment_next__vo1Pl",l="ResComment_questionImage__GTeYc",o=s(87),m=function(e){var n=e.image,s=e.comment,t=e.onClickNext,i=e.finalCond;return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("img",{className:l,src:n,alt:"anwspic"}),(0,a.jsx)("p",{children:s}),i?(0,a.jsx)(o.OL,{to:"/Quiz-React/result",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!"}):(0,a.jsx)("button",{className:c,onClick:function(){return t()},children:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})},u="ProgressBar_bar__68dzQ",d="ProgressBar_barDone__Ofm-Q",h="ProgressBar_progressIndicator__iBWAt",x=function(e){var n=e.step,s=e.length;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:u,children:(0,a.jsx)("div",{style:{width:"".concat(n/s*100,"%")},className:d})}),(0,a.jsxs)("div",{className:h,children:[n," \u0438\u0437 ",s]})]})},_=s(219),j=s(660),g=s(983),p="Question_wrapper__nlIL1",f="Question_questionField__hFxKt",C=function(e){var n=e.questions,s=e.state,t=e.questionState,r=e.correctRes,c=e.onClickVariant,l=e.onClickNext,o=!0;document.title="".concat(s+1," \u0432\u043e\u043f\u0440\u043e\u0441");var u=n[s];return(0,a.jsxs)("div",{className:p,children:[(0,a.jsx)(_.Z,{image:u.backImage}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(j.Z,{children:0===t?(0,a.jsx)(g.Z,{in:o,appear:!0,timeout:600,classNames:"fade",children:(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)(i,{question:u,onClickVariant:c}),(0,a.jsx)(a.Fragment,{children:s!==n.length&&(0,a.jsx)(x,{step:s+1,length:n.length})})]})}):(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)(g.Z,{in:o,appear:!0,timeout:600,classNames:"fade",children:(0,a.jsx)(m,{image:u.imageCorrect,comment:u.commentCorrect,onClickNext:l,finalCond:s===n.length-1})}):(0,a.jsx)(g.Z,{in:o,appear:!0,timeout:600,classNames:"fade",children:(0,a.jsx)(m,{image:u.imageWrong,comment:u.commentWrong,onClickNext:l,finalCond:s===n.length-1})})})})})]})}}}]);
//# sourceMappingURL=906.1eeee55e.chunk.js.map