// ==UserScript==
// @name
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        *
// @grant        none
// ==/UserScript==


var activated = false;
document.addEventListener('keydown', function(zEvent) {
  if (!activated && zEvent.ctrlKey && zEvent.altKey && zEvent.code === 'KeyP') {
    activated = true;
    enhancePasswordInputs();
  }
});


function enhancePasswordInputs() {
  /* eslint no-console: 0 */
  // eslint-disable-next-line
  var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
  var $;
  loadAndExecute('https://code.jquery.com/jquery-latest.js', function() {
    // eslint-disable-next-line
    const eyeBase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMS42MjZweCIgaGVpZ2h0PSI1MTEuNjI2cHgiIHZpZXdCb3g9IjAgMCA1MTEuNjI2IDUxMS42MjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS42MjYgNTExLjYyNjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTUwNS45MTgsMjM2LjExN2MtMjYuNjUxLTQzLjU4Ny02Mi40ODUtNzguNjA5LTEwNy40OTctMTA1LjA2NWMtNDUuMDE1LTI2LjQ1Ny05Mi41NDktMzkuNjg3LTE0Mi42MDgtMzkuNjg3DQoJCWMtNTAuMDU5LDAtOTcuNTk1LDEzLjIyNS0xNDIuNjEsMzkuNjg3QzY4LjE4NywxNTcuNTA4LDMyLjM1NSwxOTIuNTMsNS43MDgsMjM2LjExN0MxLjkwMywyNDIuNzc4LDAsMjQ5LjM0NSwwLDI1NS44MTgNCgkJYzAsNi40NzMsMS45MDMsMTMuMDQsNS43MDgsMTkuNjk5YzI2LjY0Nyw0My41ODksNjIuNDc5LDc4LjYxNCwxMDcuNDk1LDEwNS4wNjRjNDUuMDE1LDI2LjQ2LDkyLjU1MSwzOS42OCwxNDIuNjEsMzkuNjgNCgkJYzUwLjA2LDAsOTcuNTk0LTEzLjE3NiwxNDIuNjA4LTM5LjUzNmM0NS4wMTItMjYuMzYxLDgwLjg1Mi02MS40MzIsMTA3LjQ5Ny0xMDUuMjA4YzMuODA2LTYuNjU5LDUuNzA4LTEzLjIyMyw1LjcwOC0xOS42OTkNCgkJQzUxMS42MjYsMjQ5LjM0NSw1MDkuNzI0LDI0Mi43NzgsNTA1LjkxOCwyMzYuMTE3eiBNMTk0LjU2OCwxNTguMDNjMTcuMDM0LTE3LjAzNCwzNy40NDctMjUuNTU0LDYxLjI0Mi0yNS41NTQNCgkJYzMuODA1LDAsNy4wNDMsMS4zMzYsOS43MDksMy45OTljMi42NjIsMi42NjQsNCw1LjkwMSw0LDkuNzA3YzAsMy44MDktMS4zMzgsNy4wNDQtMy45OTQsOS43MDQNCgkJYy0yLjY2MiwyLjY2Ny01LjkwMiwzLjk5OS05LjcwOCwzLjk5OWMtMTYuMzY4LDAtMzAuMzYyLDUuODA4LTQxLjk3MSwxNy40MTZjLTExLjYxMywxMS42MTUtMTcuNDE2LDI1LjYwMy0xNy40MTYsNDEuOTcxDQoJCWMwLDMuODExLTEuMzM2LDcuMDQ0LTMuOTk5LDkuNzFjLTIuNjY3LDIuNjY4LTUuOTAxLDMuOTk5LTkuNzA3LDMuOTk5Yy0zLjgwOSwwLTcuMDQ0LTEuMzM0LTkuNzEtMy45OTkNCgkJYy0yLjY2Ny0yLjY2Ni0zLjk5OS01LjkwMy0zLjk5OS05LjcxQzE2OS4wMTUsMTk1LjQ4MiwxNzcuNTM1LDE3NS4wNjUsMTk0LjU2OCwxNTguMDN6IE0zNzkuODY3LDM0OS4wNA0KCQljLTM4LjE2NCwyMy4xMi03OS41MTQsMzQuNjg3LTEyNC4wNTQsMzQuNjg3Yy00NC41MzksMC04NS44ODktMTEuNTYtMTI0LjA1MS0zNC42ODdzLTY5LjkwMS01NC4yLTk1LjIxNS05My4yMjINCgkJYzI4LjkzMS00NC45MjEsNjUuMTktNzguNTE4LDEwOC43NzctMTAwLjc4M2MtMTEuNjEsMTkuNzkyLTE3LjQxNyw0MS4yMDctMTcuNDE3LDY0LjIzNmMwLDM1LjIxNiwxMi41MTcsNjUuMzI5LDM3LjU0NCw5MC4zNjINCgkJczU1LjE1MSwzNy41NDQsOTAuMzYyLDM3LjU0NGMzNS4yMTQsMCw2NS4zMjktMTIuNTE4LDkwLjM2Mi0zNy41NDRzMzcuNTQ1LTU1LjE0NiwzNy41NDUtOTAuMzYyDQoJCWMwLTIzLjAyOS01LjgwOC00NC40NDctMTcuNDE5LTY0LjIzNmM0My41ODUsMjIuMjY1LDc5Ljg0Niw1NS44NjUsMTA4Ljc3NiwxMDAuNzgzQzQ0OS43NjcsMjk0Ljg0LDQxOC4wMzEsMzI1LjkxMywzNzkuODY3LDM0OS4wNA0KCQl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
    // eslint-disable-next-line
    const noEyeBase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBJY29Nb29uLmlvIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBkYXRhLXRhZ3M9InJlbW92ZS1jaXJjbGUsIGNhbmNlbCwgY2xvc2UsIHJlbW92ZSwgZGVsZXRlIgogICBoZWlnaHQ9IjEyMDAiCiAgIHdpZHRoPSIxMjAwIgogICBkYXRhLWR1PSLvgZwiCiAgIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXllLWNsb3NlLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTUzNSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzYiCiAgICAgaWQ9Im5hbWVkdmlldzMwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjI2MzM5Mjg2IgogICAgIGlua3NjYXBlOmN4PSI0NTUuMTY2NTYiCiAgICAgaW5rc2NhcGU6Y3k9IjY0LjAzNzYzNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjUiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI0IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE2MiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPHBhdGgKICAgICBpZD0icGF0aDY1OTYiCiAgICAgZD0iTSA2NjkuNzI2NTUsMjczLjUxNjE1IEMgNjQ2LjgzNjMzLDI3MS4wNDA2NyA2MjMuNTc2NDksMjY5LjYyMTU0IDYwMCwyNjkuMjY4MDkgNDk2Ljk3NDEzLDI2OS43MjUxNCAzOTAuMTc2NzIsMjk0Ljc4NTIxIDI4OS4wODcwNCwzNDIuODAzMjUgMjE0LjAyOTE0LDM3OS45MjU0NCAxNDAuOTEzNTIsNDMyLjMzMzMzIDc3LjQxNjg2OSw0OTYuOTc3OTQgNDYuMjMyMTE0LDUyOS45Nzc0NyA2LjQzMTI1MSw1NzcuNzU5OTcgMCw2MjguNzQwNzUgYyAwLjc1OTYwNDY4LDQ0LjE2MTE3IDQ4LjE1MzI4NSw5OC42Njk1NCA3Ny40MTY4NjksMTMxLjc2MjgyIDU5LjU0Mjk3MSw2Mi4xMDY3OSAxMzAuNzUzODQxLDExMy4wMTI4IDIxMS42NzAxNzEsMTU0LjE3NDY3IDIuNzQ5NDUsMS4zMzQzMSA1LjUwOTQ1LDIuNjUzODUgOC4yNzYyNCwzLjk1NTA5IGwgLTc1LjA3MiwxMzEuMTAwOTcgMTAyLjAwNTI3LDYwLjI4NTkgNTUxLjQxNTQ4LC05NjAuMDMyNTkgLTk4LjE4NTM3LC02MC4wMDc4MDIgeiBtIDIzMi44MzcwNSw2NS40Nzg1MSAtNzQuOTI2ODgsMTI5Ljg1ODI3IGMgMzQuNDY5MzEsNDQuNzgxNTcgNTQuOTMxNjUsMTAwLjAwNTI0IDU0LjkzMTY1LDE1OS44ODc4MiAwLDE0OS4yNTY1NiAtMTI2LjUyMjY2LDI3MC4yNjM2NyAtMjgyLjY0MTQ5LDI3MC4yNjM2NyAtNi43NDk1NCwwIC0xMy4yOTAyNSwtMC43MjgxOSAtMTkuOTIxODgsLTEuMTcxODcgbCAtNDkuNTg1MDcsODUuODM5ODQgYyAyMi44NjgxOSwyLjQ0ODc1IDQ1Ljk5MDQ2LDQuMjMzMjkgNjkuNTgwMDcsNC41NDEwMSAxMDMuMTIyNjYsLTAuNDYzODIgMjA5Ljg2MTI2LC0yNS44MTI2NSAzMTAuODM5ODUsLTczLjUzNTE2IDc1LjA1NzksLTM3LjEyMjE3IDE0OC4yNDY2NSwtODkuNTMwMDYgMjExLjc0MzI1LC0xNTQuMTc0NjcgMzEuMTg1LC0zMi45OTkwNiA3MC45ODUyLC04MC43ODIwMyA3Ny40MTY5LC0xMzEuNzYyODIgLTAuNzU5NiwtNDQuMTYxMTcgLTQ4LjE1MywtOTguNjY5NzYgLTc3LjQxNjksLTEzMS43NjI4MSAtNTkuNTQyOSwtNjIuMTA2NzkgLTEzMC44MjY5MiwtMTEzLjAxMjgyIC0yMTEuNzQzMjUsLTE1NC4xNzQ2OSAtMi43MzE2NCwtMS4zMjUzOSAtNS41Mjc1LC0yLjUxNjAxIC04LjI3NjI1LC0zLjgwODU5IHogbSAtMzAyLjYzNjcyLDE5LjQ4MjQxIGMgNi44NDUzOCwwIDEzLjYzNzU3LDAuMjc0OTMgMjAuMzYxMDksMC43MzI0MyBsIC01OC4wODA5MywxMDAuNTYxNDIgYyAtODEuNTEzOTksMTYuNTI2MDEgLTE0Mi42NzU3OSw4NS44Nzk2NyAtMTQyLjY3NTc5LDE2OC44OTY3IDAsMjAuODUzNTIgMy44NDA0Nyw0MC44MTk3IDEwLjkxMjk2LDU5LjMyNTk0IDAuMDA4LDAuMDIxMSAtMC4wMDgsMC4wNTIzIDAsMC4wNzM0IEwgMzcyLjIxNjgsNzg4LjkyMTUyIGMgLTM0LjU1MDYzLC00NC44MjI4MSAtNTQuOTMxNjUsLTEwMC4yMjkzIC01NC45MzE2NSwtMTYwLjE4MDc5IDAsLTE0OS4yNTY1NiAxMjYuNTIyNjYsLTI3MC4yNjM2NyAyODIuNjQxNzMsLTI3MC4yNjM2NyB6IE0gNzY4Ljg5NjQ5LDU3MC41MTMxIDYzOC4wMTI4Miw3OTcuMjcwOTIgQyA3MTkuMDg4NzYsNzgwLjQzMzQgNzc5LjgwOTcsNzExLjM5NTkgNzc5LjgwOTcsNjI4LjY2NzYyIGMgMCwtMjAuNDczNTkgLTQuMDg1NjMsLTM5LjkzODIgLTEwLjkxMzIxLC01OC4xNTQ1MiB6IgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjY2NjY2Nzc2NjY2NjY2NjY3NjY3NjY2Nzc2Njc2MiIC8+Cjwvc3ZnPgo=';

    var buttonConfig = {
      show: {
        imgSrc: eyeBase64,
        title: 'Click to reveal password',
        inputType: 'password',
      },
      hide: {
        imgSrc: noEyeBase64,
        title: 'Click to hide password',
        inputType: 'text',
      }
    };

    var count = 0;

    $('input[type=password]')
      .each(function() {
        count++;

        const inputHeight = $(this).height();
        const config = buttonConfig.show;

        $(this)
          .attr('data-pwd-reveal-index', count)
          .after(`
            <button class="show-pwd-button" data-pwd-reveal-index="${count}" data-toggle="hide">
              <img width="${inputHeight}" src="${config.imgSrc}" title="${config.title}">
            </button>`);
      });

    $('.show-pwd-button').on('click', function() {
      const revealIndex = $(this).attr('data-pwd-reveal-index');
      const pwdInput = $(`input[data-pwd-reveal-index=${revealIndex}]`);

      const showOrHide = $(this).attr('data-toggle');
      const config = buttonConfig[showOrHide];
      pwdInput.attr('type', config.inputType);

      const img = $('img', this);
      img.attr('title', config.title);
      img.attr('src', config.imgSrc);

      $(this).attr('data-toggle', showOrHide === 'show' ? 'hide' : 'show');
    });
  });
}
