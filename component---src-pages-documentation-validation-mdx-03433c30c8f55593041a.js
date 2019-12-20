(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{LWqI:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("E/Ix"),s=t("soUV");var c={},o={_frontmatter:c},b=s.default;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"validation"},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#validation","aria-label":"validation permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Validation"),Object(n.b)("p",null,"Validation is one of the key ways in which Fielder differentiates itself from other libraries."),Object(n.b)("h2",{id:"how-validation-works"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#how-validation-works","aria-label":"how validation works permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"How validation works"),Object(n.b)("p",null,"While most libraries require a form's validation criteria to be declared upfront, Fielder\ntreats validation as an ",Object(n.b)("strong",{parentName:"p"},"evolutionary")," process."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Fielder allows you to have a valid state, even if your whole form isn't ready to be submitted")),Object(n.b)("p",null,"This has the following advantages:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Validation can be incrementally added"),Object(n.b)("li",{parentName:"ul"},"Presenting validation state to the user is much simpler"),Object(n.b)("li",{parentName:"ul"},"Wizards/steppers/multi-page forms just work (see below)")),Object(n.b)("h3",{id:"valid-states"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#valid-states","aria-label":"valid states permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Valid states"),Object(n.b)("p",null,"A form is valid when all ",Object(n.b)("strong",{parentName:"p"},"visible")," fields are valid."),Object(n.b)("p",null,"A valid state implies the user has done their job and is able to progress to the next action (i.e. next page, next section, submit)."),Object(n.b)("h2",{id:"using-validation"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#using-validation","aria-label":"using validation permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using validation"),Object(n.b)("p",null,"Adding validation is as simple as providing a function to ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"useField")," which is called on a given change event."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Form-wide validation is not supported in Fielder (see above for reasons why).")),Object(n.b)("h3",{id:"basic-validation"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#basic-validation","aria-label":"basic validation permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Basic validation"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"tsx"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-tsx"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"useField"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'password'"),"\n  validate",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," validatePassword",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"validatePassword")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"val"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!"),"val ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," val",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"length ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"8"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"throw")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"Error"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"Password must be 8 characters long"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Your validation function should take 1 or 2 values (field state and form state, respectively), and should\nthrow an error orn string if validation is not successful."),Object(n.b)("h3",{id:"cross-field-validation"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#cross-field-validation","aria-label":"cross field validation permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Cross field validation"),Object(n.b)("p",null,"The below example demonstrates is a cross field validation function which checks other values within the form."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"tsx"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-tsx"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"validateDrink")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"val",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," state"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"Number"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"state",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"age",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"21")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," val ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"Beer"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"throw")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"Error"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"You must be 21 to order Beer"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.b)("h3",{id:"conditional-validation"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#conditional-validation","aria-label":"conditional validation permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Conditional validation"),Object(n.b)("p",null,"As you would expect, Fielder reacts to changes to it's hooks. This means validation functions\ncan be conditionally added, changed and/or removed at any time."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"tsx"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-tsx"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"useField"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'password'"),"\n  validate",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"useMemo"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>"),"\n    shouldValidate ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," validatePassword ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," undefined",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"shouldValidate",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You'll want to wrap any functions being declared inside of a component with ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"useCallback"))),Object(n.b)("h3",{id:"using-3rd-party-libraries"},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#using-3rd-party-libraries","aria-label":"using 3rd party libraries permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using 3rd party libraries"),Object(n.b)("p",null,"You can use simple JS, or any validation library you desire (including ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Yup"),")."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"tsx"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-tsx"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"validateFn")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"val")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," Yup",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"string"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"validateSync"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"val",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"It's advised that you use synchronous validation where possible to reduce the number of\nrenders in your form.")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-validation-mdx-03433c30c8f55593041a.js.map