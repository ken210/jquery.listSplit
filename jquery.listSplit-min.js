/*! jQuery.listSplit v0.4 github.com/ken210/jquery.listSplit | opensource.org/licenses/mit-license.php */
(function(a){a.fn.listSplit=function(d,c){var b=[];this.each(function(){var h=a(this),p=this.tagName.toLowerCase(),o=this.attributes,j=p==="dl"?2:1,k=h.children(/li|dd|t/),q=k.length/j,e=a("<div />"),n,m=0,f=0,l=0,g;d=d||2;if(p.match(/d|o|ul/)&&d>1){while(q>0){g=Math[!!c?"floor":"ceil"](q/(d-m));f=m>0&&l;l=f+g*j;n="<"+p;if(p==="ol"&&m>0){n+=' start="'+(f+1).toString()+'"'}n+=" />";n=a(n);n.append(k.slice(f,l));e.append(n);q-=g;f+=1;m+=1}a.each(o,function(){e.attr(this.name,this.value)});e.addClass("split-"+m);h.replaceWith(e);b.push(e[0])}});return a(b)}}(jQuery));