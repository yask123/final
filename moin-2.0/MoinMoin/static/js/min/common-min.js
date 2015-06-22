function MoinMoin(){"use strict"}MoinMoin.prototype.MOINFLASHINFO="moin-flash moin-flash-info",MoinMoin.prototype.MOINFLASHWARNING="moin-flash moin-flash-warning",MoinMoin.prototype.moinFlashMessage=function(t,e){"use strict";var n='<P class="'+t+'">'+e+"</p>";$(n).appendTo($("#moin-flash"))},MoinMoin.prototype.selected_link=function(){"use strict";var t=window.location.pathname,e=$(".moin-panel"),n,i,o,s;for(i=0;i<e.length;i+=1)for(o=e[i].getElementsByTagName("a"),n=0;n<o.length;n+=1)if(s=o[n].attributes.href.value,s===t){o[n].parentElement.setAttribute("class","active");break}},MoinMoin.prototype.toggleComments=function(){"use strict";var t=$(".comment"),e=$(".moin-toggle-comments-tooltip");return t.is(":hidden")?(t.show(),e.attr("title",_("Hide comments"))):(t.hide(),e.attr("title",_("Show comments"))),!1},MoinMoin.prototype.initToggleComments=function(){"use strict";var t=$(".comment");t.length>0?document.getElementById("moin-show-comments")||this.toggleComments():$(".moin-toggle-comments-button").css("display","none"),$(".moin-toggle-comments-button").click(this.toggleComments)},MoinMoin.prototype.toggleTransclusionOverlays=function(){"use strict";var t=$(".moin-item-overlay-ul, .moin-item-overlay-lr"),e;return t.length>0&&(e=$(".moin-transclusions-tooltip"),t.is(":visible")?(t.hide(),e.attr("title",_("Show transclusions"))):(t.show(),e.attr("title",_("Hide transclusions")))),!1},MoinMoin.prototype.initTransclusionOverlays=function(){"use strict";var t,e,n,i,o,s,a,r="↘",l="↖",c=["OBJECT","IMG","AUDIO","VIDEO"];s=$($(".moin-transclusion").get().reverse()),s.each(function(o){t=s[o],location.pathname!==t.getAttribute("data-href")&&(i=$("DIV"===t.tagName?'<div class="moin-item-wrapper"></div>':'<span class="moin-item-wrapper"></span>'),e=$('<a class="moin-item-overlay-ul"></a>'),$(e).attr("href",t.getAttribute("data-href")),n=$(e).clone(!0),$(e).append(r),$(n).append(l),$(n).attr("class","moin-item-overlay-lr"),"A"===$(t).parent()[0].tagName&&(t=$(t).parent()[0]),$.inArray(t.tagName,c)>-1?(a=$(t).attr("class"),a=a.split(" ").filter(function(t){return 0!==t.lastIndexOf("moin-",0)}),$(i).addClass(a.join(" "))):$(i).addClass($(t).find(">:first-child").attr("class")),$(t).after(i),$(i).append(t),$(i).append(e),$(i).append(n))}),o=$(".moin-item-wrapper"),0===o.length&&$(".moin-transclusions-button").css("display","none"),$(".moin-transclusions-button").click(this.toggleTransclusionOverlays)},MoinMoin.prototype.QuicklinksExpander=function(){"use strict";function t(){return $(".userlink:not(.moin-navibar-icon)")}function e(t){var e=document.createElement("li"),n=document.createTextNode(t);return e.setAttribute("class","moin-userlink moin-navibar-icon"),e.appendChild(n),e}function n(t){var n=e(t);return document.getElementById("moin-navibar").appendChild(n),n}function i(t){return t.length>m}function o(){return t().slice(m)}function s(t){o().each(function(){"hide"===t?$(this).hide():$(this).show()})}function a(){s("hide")}function r(){s("show")}var l=">>>",c="<<<",m=5,u;this.getLinks=t,this.appendIcon=n,this.shouldHide=i,this.getHideableLinks=o,this.hideLinks=a,this.showLinks=r,this.navibar=$("#moin-header"),this.link=this.getLinks(),this.hideable=this.getHideableLinks(),this.shouldHide(this.link)&&(this.expandIcon=$(this.appendIcon(l)),this.closeIcon=$(this.appendIcon(c)),this.closeIcon.hide(),this.hideLinks(),u=this,this.expandIcon.mouseenter(function(){u.showLinks(),u.expandIcon.hide(),u.closeIcon.show()}),this.closeIcon.mouseenter(function(){u.hideLinks(),u.expandIcon.show(),u.closeIcon.hide()}))},MoinMoin.prototype.toggleSubtree=function(t){"use strict";var e=$(t).siblings("ul");e.toggle(200)},MoinMoin.prototype.InsertName=function(t){"use strict";var e,n,i;e=document.getElementById("f_content_form_data_text"),i=e.selectionStart,n=e.selectionEnd,e.value=e.value.substring(0,i)+t+e.value.substring(n,e.value.length),e.focus(),e.setSelectionRange(i+t.length,i+t.length)},MoinMoin.prototype.enhanceUserSettings=function(){"use strict";function t(t){var e=$(t.currentTarget),n=$(".moin-tab-titles a.moin-current-tab",e.parentsUntil(".moin-tabs").parent());e.data("initialForm")===e.serialize()?$(".moin-change-indicator",n).remove():$(".moin-change-indicator",n).length||n.append($('<span class="moin-change-indicator">*</span>'))}function e(n){function i(){s.html(a+r[l%r.length]),l+=1}var o=$(n.target),s=$("button",o),a=s.html(),r=[" .&nbsp;&nbsp;"," &nbsp;.&nbsp;"," &nbsp;&nbsp;."],l=0,c;return s.attr("disabled",!0),$(".moin-tab-titles a.moin-current-tab .moin-change-indicator",o.parentsUntil(".moin-tabs").parent()).remove(),c=setInterval(i,500),i(),$.post(o.attr("action"),o.serialize(),function(i){var s,a,r;if(clearInterval(c),i.redirect)return void(location.href=i.redirect);for($("#moin-flash .moin-flash-javascript").remove(),s=0;s<i.flash.length;s+=1)a=$(document.createElement("p")),a.html(i.flash[s][0]),a.addClass("moin-flash"),a.addClass("moin-flash-javascript"),a.addClass("moin-flash-"+i.flash[s][1]),$("#moin-flash").append(a);r=$(i.form),r.submit(e),r.change(t),r.data("initialForm",r.serialize()),o.replaceWith(r),("usersettings_ui"===n.currentTarget.name||"usersettings_personal"===n.currentTarget.id)&&location.reload(!0)},"json"),!1}if(0!==$("#moin-usersettings").length){var n=$("#moin-usersettings"),i=$('<ul class="moin-tab-titles">'),o=window.location.hash,s;$(".moin-tab-body").each(function(){var t=$(document.createElement("li")),e=$(this).find("a").clone();t.append(e),i.append(t),e.click(function(t){return $("#moin-flash .moin-flash-javascript").remove(),s=this.hash,window.location.hash=s,$(".moin-current-tab").removeClass("moin-current-tab"),$(t.target).addClass("moin-current-tab"),n.children(".moin-tab-body").hide().removeClass("moin-current-form"),n.children(s).show().addClass("moin-current-form"),!1})}),$(".moin-tabs").prepend(i),""!==o?(s=$('.moin-tab-titles li a[href="'+o+'"]'),0!==s.length&&$(s)[0].click()):$(i.children("li").children("a")[0]).click(),$("#moin-usersettings form").each(function(){$(this).data("initialForm",$(this).serialize())}),$("#moin-usersettings form").change(t),$("#moin-usersettings form").submit(e),window.onbeforeunload=function(){var t=_("Your changes will be discarded if you leave this page without saving.");return $(".moin-change-indicator").length>0?t:void 0}}},MoinMoin.prototype.enhanceEdit=function(){"use strict";function t(t,e){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select(),this.moinFlashMessage(this.MOINFLASHWARNING,c)}function e(e){var n=document.getElementById("f_content_form_data_text"),i,o,s,a;n&&(n.setSelectionRange||n.createTextRange)&&(window.scrollTo(0,0),i=$(n).val(),o=i.split("\n"),o=o.slice(0,e),o=navigator.userAgent&&navigator.userAgent.substring(0,m.length)===m?o.join("\r\n")+"\r\n":o.join("\n")+"\n",a=$(n).clone(!0),a=a[0],a.id="moin-textAreaClone",n.parentNode.appendChild(a),$("#moin-textAreaClone").val(o),a.rows=1,s=a.scrollHeight-100,a.parentNode.removeChild(a),n.focus(),s>0&&(n.scrollTop=s),n.setSelectionRange?(n.setSelectionRange(o.length,o.length+8),setTimeout(function(){n.setSelectionRange(o.length,o.length+4)},1e3),setTimeout(function(){n.setSelectionRange(o.length,o.length)},1500)):t(n,o.length))}function n(t){var e=document.getElementById(s),n=!0,i=10,o;for(t=parseInt(t,i);e.lastChild;)e=e.lastChild;for(;n&&e.id!==s;)if(e.hasAttribute&&e.hasAttribute(a)&&parseInt(e.getAttribute(a),i)<=t&&(n=!1),n)if(e.previousSibling)for(e=e.previousSibling;e.lastChild;)e=e.lastChild;else e=e.parentNode;e.scrollIntoView(),window.scrollTo(window.pageXOffset,window.pageYOffset-100),o=e.style.backgroundColor,e.style.backgroundColor="yellow",setTimeout(function(){e.style.backgroundColor=o},1500)}function i(t){var e;if(e=$(t).closest("["+a+"]"),e.length)return $(e).attr(a);for(;t.id!==s;){if(t.hasAttribute&&t.hasAttribute(a))return t.getAttribute(a);if(t.previousSibling)for(t=t.previousSibling;t.lastChild;)t=t.lastChild;else t=t.parentNode}return 0}function o(t){var e,n;return t.selectionStart?(e=t.selectionStart,n=navigator.userAgent&&navigator.userAgent.substring(0,m.length)===m?t.value:$(t).val(),n=n.substring(0,e),n.split("\n").length):0}var s="moin-content",a="data-lineno",r=_("You missed! Double-click on text or to the right of text to auto-scroll text editor."),l=_("Your browser is obsolete. Upgrade to gain auto-scroll text editor feature."),c=_("Your browser is old. Upgrade to gain auto-scroll page after edit feature."),m="Opera",u,d,h,g;window.sessionStorage?(document.getElementById("moin-edit-on-doubleclick")&&(u=$(".moin-modify-button")[0],u&&$("#moin-content").dblclick(function(t){h=i(t.target),(h>0||$("*[data-lineno]").length>0)&&(sessionStorage.moinDoubleLineNo=h),document.location=u.href}),sessionStorage.moinCaretLineNo&&(n(sessionStorage.moinCaretLineNo),sessionStorage.removeItem("moinCaretLineNo"))),sessionStorage.moinDoubleLineNo&&(h=sessionStorage.moinDoubleLineNo,sessionStorage.removeItem("moinDoubleLineNo"),"0"===h&&(this.moinFlashMessage(this.MOINFLASHINFO,r),h=1),e(h-1),document.getElementById("moin-scroll-page-after-edit")&&$("#moin-save-text-button").click(function(){g=o(document.getElementById("f_content_form_data_text")),g>0&&(sessionStorage.moinCaretLineNo=g)}))):document.getElementById("moin-edit-on-doubleclick")?(u=$(".moin-modify-button")[0],u&&$("#moin-content").dblclick(function(){document.location=u.href})):(d=$("#moin-modify")[0],d&&this.moinFlashMessage(this.MOINFLASHWARNING,l))},$(document).ready(function(){"use strict";var t=new MoinMoin;t.selected_link(),t.initTransclusionOverlays(),null!==document.getElementById("moin-navibar")&&t.QuicklinksExpander(),$(".moin-insertname-action").click(function(){var e=$(this).data("name");t.InsertName(e)}),$(".expander").click(function(){t.toggleSubtree(this)}),$(".moin-useractions").click(function(){return $("#moin-user-actions").toggleClass("hidden"),$(".moin-useractions > i").toggleClass("fa-rotate-90"),!1}),$(".moin-viewoptions").click(function(){return $("#moin-view-options").toggleClass("hidden"),$(".moin-viewoptions > i").toggleClass("fa-rotate-90"),!1}),$(".moin-itemactions").click(function(){return $("#moin-item-actions").toggleClass("hidden"),$(".moin-itemactions > i").toggleClass("fa-rotate-90"),!1}),t.enhanceUserSettings(),t.enhanceEdit(),$(".moin-sortable").tablesorter(),$("#moin-modify").on("change keyup keydown","input, textarea, select",function(t){$("#moin-modify").addClass("moin-changed-input")}),$("#moin-save-text-button").on("click",function(){$("#moin-modify").removeClass("moin-changed-input")}),$(window).on("beforeunload",function(){return $(".moin-changed-input").length?"Data you may have entered will be discarded!":void 0}),t.initToggleComments()});
