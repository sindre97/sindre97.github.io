/**
 * home 界面的js代码文件
 */

//设为首页
function SetHome(obj,url){
	try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
	}catch(e){
		if(window.netscape){
			try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
		}else{
			alert("抱歉，您所使用的浏览器无法完成此操作。您需要手动将【"+url+"】设置为首页。");
		}
	}
}

//收藏本站
function AddFavorite(title, url) {
	try {
		window.external.addFavorite(url, title);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
		}
		catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。网址加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}

//搜索所采用的action
var search_form_action_hash=new Array();
search_form_action_hash["1_1"]="http://www.baidu.com/s";
search_form_action_hash["1_2"]="https://www.google.com.hk/search";
search_form_action_hash["1_3"]="http://cn.bing.com/search";
search_form_action_hash["1_4"]="http://www.sogou.com/web";
search_form_action_hash["1_5"]="http://www.youdao.com/search";
search_form_action_hash["1_6"]="http://www.haosou.com/s";
search_form_action_hash["2_1"]="http://www.bilibili.tv/search";
search_form_action_hash["2_2"]="http://www.acfun.tv/search.aspx";
search_form_action_hash["2_3"]="http://www.tucao.cc/index.php?m=search&c=index&a=init2&catid=0&time=all&order=inputtime&username=&tag=&q=";
search_form_action_hash["2_4"]="http://www.soku.com/v";
search_form_action_hash["2_5"]="http://www.nicovideo.jp/search/";
search_form_action_hash["3_1"]="http://tieba.baidu.com/f";
search_form_action_hash["4_1"]="http://www.pixiv.net/search.php";
search_form_action_hash["4_2"]="http://image.baidu.com/i";
search_form_action_hash["4_3"]="http://images.google.com.hk/images";
search_form_action_hash["4_4"]="http://image.youdao.com/search";
search_form_action_hash["4_5"]="http://cn.bing.com/images/search";
search_form_action_hash["4_6"]="http://image.haosou.com/i";
search_form_action_hash["4_7"]="http://huaban.com/search/?";
search_form_action_hash["5_1"]="http://www.xiami.com/search";
search_form_action_hash["5_2"]="http://music.baidu.com/search";
search_form_action_hash["5_3"]="http://mp3.sogou.com/music";
search_form_action_hash["5_4"]="http://www.xiami.com/search";
search_form_action_hash["6_1"]="http://zh.moegirl.org/index.php";
search_form_action_hash["6_2"]="http://baike.baidu.com/search/word";
search_form_action_hash["6_3"]="http://zh.wikipedia.org/w/index.php";
search_form_action_hash["6_4"]="http://www.zhihu.com/search?";
search_form_action_hash["7_1"]="http://dict.youdao.com/search";
search_form_action_hash["7_2"]="http://fanyi.baidu.com/#en/zh/";//bug
search_form_action_hash["7_3"]="http://translate.google.cn/?hl=en";

//搜索所采用的inputtext
var search_form_inputtext_hash=new Array();
search_form_inputtext_hash["1_1"]="1";//百度搜索wd
search_form_inputtext_hash["1_2"]="2";//谷歌搜索 q
search_form_inputtext_hash["1_3"]="2";//必应搜索 q
search_form_inputtext_hash["1_4"]="3";//搜狗搜索 query
search_form_inputtext_hash["1_5"]="2";//有道搜索 q
search_form_inputtext_hash["1_6"]="2";//hao搜索 q
search_form_inputtext_hash["2_1"]="4";//bilibili  keyword
search_form_inputtext_hash["2_2"]="3";//AcFUN query
search_form_inputtext_hash["2_3"]="2";//TUCAO  q
search_form_inputtext_hash["2_4"]="4";//SOKU  keyword
search_form_inputtext_hash["2_5"]="10";//动画   s
search_form_inputtext_hash["3_1"]="5";//百度贴吧 kw
search_form_inputtext_hash["4_1"]="6";//pixiv搜索 word
search_form_inputtext_hash["4_2"]="6";//百度图库 word
search_form_inputtext_hash["4_3"]="2";//谷歌图库 q
search_form_inputtext_hash["4_4"]="2";//有道图库 q
search_form_inputtext_hash["4_5"]="2";//必应图库 q
search_form_inputtext_hash["4_6"]="2";//hao搜  q
search_form_inputtext_hash["4_7"]="2";//花瓣 q
search_form_inputtext_hash["5_1"]="7";//虾米音乐 key
search_form_inputtext_hash["5_2"]="7";//百度音乐 key
search_form_inputtext_hash["5_3"]="3";//搜狗音乐 query
search_form_inputtext_hash["5_4"]="";//QQ音乐
search_form_inputtext_hash["6_1"]="8";//萌娘百科 search
search_form_inputtext_hash["6_2"]="6";//百度百科 word
search_form_inputtext_hash["6_3"]="8";//WIKI search
search_form_inputtext_hash["6_4"]="2";//知乎 q
search_form_inputtext_hash["7_1"]="2";//有道翻译 q
search_form_inputtext_hash["7_2"]="9";//百度翻译 text
search_form_inputtext_hash["7_3"]="9";//谷歌翻译 text

//form表单的字符集编码
var search_form_charset_hash=new Array();
search_form_charset_hash["1_1"]="UTF-8";//百度搜索
search_form_charset_hash["1_2"]="UTF-8";//谷歌搜索
search_form_charset_hash["1_3"]="UTF-8";//必应搜索
search_form_charset_hash["1_4"]="UTF-8";//搜狗搜索
search_form_charset_hash["1_5"]="UTF-8";//有道搜索
search_form_charset_hash["1_6"]="UTF-8";//hao搜索
search_form_charset_hash["2_1"]="UTF-8";//bilibili  
search_form_charset_hash["2_2"]="UTF-8";//AcFUN 
search_form_charset_hash["2_3"]="UTF-8";//TUCAO
search_form_charset_hash["2_4"]="UTF-8";//SOKU  
search_form_charset_hash["2_5"]="UTF-8";//动画   
search_form_charset_hash["3_1"]="UTF-8";//百度贴吧 
search_form_charset_hash["4_1"]="UTF-8";//pixiv搜索
search_form_charset_hash["4_2"]="gb2312";//百度图库 
search_form_charset_hash["4_3"]="UTF-8";//谷歌图库 
search_form_charset_hash["4_4"]="UTF-8";//有道图库 
search_form_charset_hash["4_5"]="UTF-8";//必应图库 
search_form_charset_hash["4_6"]="UTF-8";//hao搜
search_form_charset_hash["4_7"]="UTF-8";//花瓣
search_form_charset_hash["5_1"]="UTF-8";//虾米音乐 
search_form_charset_hash["5_2"]="UTF-8";//百度音乐 
search_form_charset_hash["5_3"]="UTF-8";//搜狗音乐
search_form_charset_hash["5_4"]="UTF-8";//QQ音乐
search_form_charset_hash["6_1"]="UTF-8";//萌娘百科 
search_form_charset_hash["6_2"]="UTF-8";//百度百科 
search_form_charset_hash["6_3"]="UTF-8";//WIKI 
search_form_charset_hash["6_4"]="UTF-8";//知乎
search_form_charset_hash["7_1"]="UTF-8";//有道翻译
search_form_charset_hash["7_2"]="UTF-8";//百度翻译 
search_form_charset_hash["7_3"]="UTF-8";//谷歌翻译 

//搜索按钮上显示的名字
var search_button_name_hash=new Array();
search_button_name_hash["1_1"]="百度搜索";
search_button_name_hash["1_2"]="谷歌搜索";
search_button_name_hash["1_3"]="必应搜索";
search_button_name_hash["1_4"]="搜狗搜索";
search_button_name_hash["1_5"]="有道搜索";
search_button_name_hash["1_6"]="Hao搜索";
search_button_name_hash["2_1"]="bilibili";
search_button_name_hash["2_2"]="AcFUN";
search_button_name_hash["2_3"]="TUCAO";
search_button_name_hash["2_4"]="SOKU";
search_button_name_hash["2_5"]="动画";
search_button_name_hash["3_1"]="百度贴吧";
search_button_name_hash["4_1"]="pixiv搜索";
search_button_name_hash["4_2"]="百度图库";
search_button_name_hash["4_3"]="谷歌图库";
search_button_name_hash["4_4"]="有道图库";
search_button_name_hash["4_5"]="必应图库";
search_button_name_hash["4_6"]="Hao图库";
search_button_name_hash["4_7"]="花瓣图库";
search_button_name_hash["5_1"]="虾米音乐";
search_button_name_hash["5_2"]="百度音乐";
search_button_name_hash["5_3"]="搜狗音乐";
search_button_name_hash["5_4"]="QQ音乐";
search_button_name_hash["6_1"]="萌娘百科";
search_button_name_hash["6_2"]="百度百科";
search_button_name_hash["6_3"]="WIKI";
search_button_name_hash["6_4"]="知乎";
search_button_name_hash["7_1"]="有道翻译";
search_button_name_hash["7_2"]="百度翻译";
search_button_name_hash["7_3"]="谷歌翻译";

//搜索按钮上显示的名字
var search_classitem_pic_hash=new Array();
search_classitem_pic_hash["1_1"]="images/search_logo_lan/search_logo_baidu.png";
search_classitem_pic_hash["1_2"]="images/search_logo_lan/search_logo_google.png";
search_classitem_pic_hash["1_3"]="images/search_logo_lan/search_logo_bing.png";
search_classitem_pic_hash["1_4"]="images/search_logo_lan/search_logo_sougousousuo.png";
search_classitem_pic_hash["1_5"]="images/search_logo_lan/search_logo_youdao.png";
search_classitem_pic_hash["1_6"]="images/search_logo_lan/search_logo_haosou.png";
search_classitem_pic_hash["2_1"]="images/search_logo_lan/search_logo_bilibili.png";
search_classitem_pic_hash["2_2"]="images/search_logo_lan/search_logo_acfun.png";
search_classitem_pic_hash["2_3"]="images/search_logo_lan/search_logo_tucao.png";
search_classitem_pic_hash["2_4"]="images/search_logo_lan/search_logo_soku.png";
search_classitem_pic_hash["2_5"]="images/search_logo_lan/search_logo_donghua.png";
search_classitem_pic_hash["3_1"]="images/search_logo_lan/search_logo_baidutieba.png";
search_classitem_pic_hash["4_1"]="images/search_logo_lan/search_logo_pixiv.png";
search_classitem_pic_hash["4_2"]="images/search_logo_lan/search_logo_baidu.png";
search_classitem_pic_hash["4_3"]="images/search_logo_lan/search_logo_google.png";
search_classitem_pic_hash["4_4"]="images/search_logo_lan/search_logo_youdao.png";
search_classitem_pic_hash["4_5"]="images/search_logo_lan/search_logo_bing.png";
search_classitem_pic_hash["4_6"]="images/search_logo_lan/search_logo_haosou.png";
search_classitem_pic_hash["4_7"]="images/search_logo_lan/search_logo_huaban.png";
search_classitem_pic_hash["5_1"]="images/search_logo_lan/search_logo_xiami.png";
search_classitem_pic_hash["5_2"]="images/search_logo_lan/search_logo_baidu.png";
search_classitem_pic_hash["5_3"]="images/search_logo_lan/search_logo_sougouyinyue.png";
search_classitem_pic_hash["5_4"]="images/search_logo_lan/search_logo_qqyinyue.png";
search_classitem_pic_hash["6_1"]="images/search_logo_lan/search_logo_mengnianbaike.png";
search_classitem_pic_hash["6_2"]="images/search_logo_lan/search_logo_baidubaike.png";
search_classitem_pic_hash["6_3"]="images/search_logo_lan/search_logo_wiki.png";
search_classitem_pic_hash["6_4"]="images/search_logo_lan/search_logo_zhihu.png";
search_classitem_pic_hash["7_1"]="images/search_logo_lan/search_logo_youdaocidian.png";
search_classitem_pic_hash["7_2"]="images/search_logo_lan/search_logo_baidu.png";
search_classitem_pic_hash["7_3"]="images/search_logo_lan/search_logo_google.png";

//搜索框的提示字
var search_input_placeholder_hash=new Array();
search_input_placeholder_hash["1"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["2"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["3"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["4"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["5"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["6"] = "    这里，这里，输入想要搜索的内容";
search_input_placeholder_hash["7"] = "    这里，这里，输入想要翻译的短句";


//当前选择搜索分类的索引
var select_search_index = 1;

//搜索分类切换函数
var search_tab_click = function(index){
	select_search_index= index;
	search_form.search_button.value = search_button_name_hash[index+"_1"];//按钮的名字
	search_form.action = search_form_action_hash[index+"_1"];//提交表单的地址
	search_classitem_indicate.src = search_classitem_pic_hash[index+"_1"];//当前选择搜索引擎的图标
	search_form.acceptCharset = search_form_charset_hash[index+"_1"];//表单的字符集
	//分类表头透明度的切换
	var search_tag_bg_list = document.getElementsByClassName("search-tag-bg");
	var cur_click_tag_bg = document.getElementById("search_tab_" + index);
	for(var i = 0; i < search_tag_bg_list.length; i++) {
		var item = search_tag_bg_list[i];
		if(item == cur_click_tag_bg) {
			item.style.opacity = 0.8;
		} else {
			item.style.opacity = 0.5;
		}
	}
	//切换输入框
	var search_input_text_list = document.getElementsByClassName("search-input");
	var search_input_text_index = search_form_inputtext_hash[index + "_1"];
	var cur_search_input_text = document.getElementById("search_input_text_" + search_input_text_index);
	for(var i = 0; i < search_input_text_list.length; i++) {
		var item = search_input_text_list[i];
		if(item == cur_search_input_text) {
			item.style.display = "block";
			item.disabled = false;
			item.placeholder=search_input_placeholder_hash[index];
		} else {
			item.style.display = "none";
			item.disabled = "disabled";
		}
	}
	
	//隐藏搜索细分列表
	var search_tag_class_list = document.getElementsByClassName("search-class-container");
	for(var i = 0; i < search_tag_class_list.length; i++) {
		var item = search_tag_class_list[i];
		item.style.display = "none";
	}
	
	//切换下拉列表打开关闭按钮
	var dropListOpen = document.getElementById("drop_down_list_open");
	var dropListClose = document.getElementById("drop_down_list_close");
	dropListOpen.style.display = "block";
	dropListClose.style.display = "none";
	
	//清除输入框的内容
	clear_input_text();
}

//搜索细分切换
var search_classitem_click = function(index){
	search_classitem_indicate.src = search_classitem_pic_hash[select_search_index+"_"+index];//当前选择搜索引擎的图标
	search_form.search_button.value = search_button_name_hash[select_search_index+"_"+index];//按钮的名字
	search_form.action = search_form_action_hash[select_search_index+"_" + index];//提交表单的地址
	search_form.acceptCharset = search_form_charset_hash[select_search_index+"_" + index];//表单的字符集
	
	//切换下拉列表打开关闭按钮
	var dropListOpen = document.getElementById("drop_down_list_open");
	var dropListClose = document.getElementById("drop_down_list_close");
	dropListOpen.style.display = "block";
	dropListClose.style.display = "none";
	
	//隐藏搜索细分列表
	var search_tag_class_list = document.getElementsByClassName("search-class-container");
	for(var i = 0; i < search_tag_class_list.length; i++) {
		var item = search_tag_class_list[i];
		item.style.display = "none";
	}
	
	//切换输入框
	var search_input_text_list = document.getElementsByClassName("search-input");
	var search_input_text_index = search_form_inputtext_hash[select_search_index + "_" + index];
	var cur_search_input_text = document.getElementById("search_input_text_" + search_input_text_index);
	for(var i = 0; i < search_input_text_list.length; i++) {
		var item = search_input_text_list[i];
		if(item == cur_search_input_text) {
			item.style.display = "block";
			item.disabled = false;
			item.placeholder=search_input_placeholder_hash[select_search_index];
		} else {
			item.style.display = "none";
			item.disabled = "disabled";
		}
	}
	
}

//打开或者关闭搜索细分的下拉列表
var drop_dow_list_click = function(open){
	var search_tag_class_list = document.getElementsByClassName("search-class-container");
	var cur_click_tag_class = document.getElementById("search_class_" + select_search_index);
	var dropListOpen = document.getElementById("drop_down_list_open");
	var dropListClose = document.getElementById("drop_down_list_close");
	if(open == true){
		for(var i = 0; i < search_tag_class_list.length; i++) {
			var item = search_tag_class_list[i];
			if(item == cur_click_tag_class) {
				item.style.display = "block";
				break;
			} 
		}
		dropListOpen.style.display = "none";
		dropListClose.style.display = "block";
	}else{
		for(var i = 0; i < search_tag_class_list.length; i++) {
			var item = search_tag_class_list[i];
			if(item == cur_click_tag_class) {
				item.style.display = "none";
				break;
			} 
		}
		dropListOpen.style.display = "block";
		dropListClose.style.display = "none";
	}
	
}

//清除输入框的内容
 function clear_input_text(){
	var search_input_text_list = document.getElementsByClassName("search-input");
	for(var i = 0; i < search_input_text_list.length; i++) {
		var item = search_input_text_list[i];
		item.value="";
	}
}

//点击展开关闭效果
function openShutManager(oSourceObj,oTargetObj){
	var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
	var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
	sourceObj.style.display = "none";
	targetObj.style.display = "block";
}

//页签切换效果
var nav_tab_click = function(index) {
	var tab_bar_head_li_bg_list = document.getElementsByClassName("tab_bar_head_li_bg");
	var cur_click_li_bg = document.getElementById("nav_tab" + index);
	for(var i = 0; i < tab_bar_head_li_bg_list.length; i++) {
		var item = tab_bar_head_li_bg_list[i];
		if(item == cur_click_li_bg) {
			item.style.backgroundColor = "#ff0000";
		} else {
			item.style.backgroundColor = "#5f9ff7";
		}
	}
	var tab_bar_body_list = document.getElementsByClassName("tab_bar_body");
	var cur_body = document.getElementById("nav_tab" + index + "_content");
	for(var i = 0; i < tab_bar_body_list.length; i++) {
		var item = tab_bar_body_list[i];
		if(item == cur_body) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	}
}

//图片轮播效果
jQuery(function($) {
	$('#turnplaypicture').slideBox({
		duration : 0.3,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 5,//滚动延迟时间，单位：秒
		hideClickBar : false,//不自动隐藏点选按键
		clickBarRadius : 10
	});
});