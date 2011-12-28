/*! jQuery.listSplit v0.4 github.com/ken210/jquery.listSplit | opensource.org/licenses/mit-license.php */
(function($){'use strict';$.fn.listSplit=function(slices,invert){var containers=[];this.each(function(){var elem=$(this),elemTag=this.tagName.toLowerCase(),elemAttr=this.attributes,modifier=elemTag==='dl'?2:1,itens=elem.children(/li|dd|t/),itensLeft=itens.length/modifier,container=$('<div />'),list,i=0,start=0,end=0,sliceSize;slices=slices||2;if(elemTag.match(/d|o|ul/)&&slices>1){while(itensLeft>0){sliceSize=Math[!!invert?'floor':'ceil'](itensLeft/(slices-i));start=i>0&&end;end=start+sliceSize*modifier;list='<'+elemTag;if(elemTag==='ol'&&i>0){list+=' start="'+(start+1).toString()+'"';}
list+=' />';list=$(list);list.append(itens.slice(start,end));container.append(list);itensLeft-=sliceSize;start+=1;i+=1;}
$.each(elemAttr,function(){container.attr(this.name,this.value);});container.addClass('split-'+i);elem.replaceWith(container);containers.push(container[0]);}});return $(containers);};}(jQuery));