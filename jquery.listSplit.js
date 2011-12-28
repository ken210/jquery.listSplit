
/*
 * Copyright (C) 2011 Ken Rosaka
 * All rights reserved.
 * 
 * jquery.listSplit - https://github.com/ken210/jquery.listSplit
 * A jQuery plugin to split a list, passing the number of slices as argument
 * Good for lists that need to fit horizontal spaces
 * Works on <ol>, <ul> or <dl>
 * Restore all element attributes in the container <div>
 * Returns new jQuery container to chain
 * Got some side effects on nested lists
 * 
 * Author: Ken Rosaka (ken210.com / @ken_rosaka)
 * Version: 0.4
 * Created: 2011-07-01
 * Release: ?
 * Last update: 2011-12-27
 * License: http://www.opensource.org/licenses/mit-license.php
 * You can do anything with this code, but do not sue me.
 */

(function ($) {

	'use strict';

	$.fn.listSplit = function (slices, invert) {

		var containers = [];

		this.each(function () {

			var elem = $(this),
				elemTag = this.tagName.toLowerCase(),
				elemAttr = this.attributes,
				modifier = elemTag === 'dl' ? 2 : 1,
				itens = elem.children(/li|dd|t/), // li, dd or dt
				itensLeft = itens.length / modifier,
				container = $('<div />'),
				list,
				i = 0,
				start = 0,
				end = 0,
				sliceSize;

			slices = slices || 2;

			if (elemTag.match(/d|o|ul/) && slices > 1) {

				while (itensLeft > 0) { // for each new list

					// inverting make the lasts lists longer than firsts
					sliceSize = Math[!!invert ? 'floor' : 'ceil'](itensLeft / (slices - i)); // get slice size
					start = i > 0 && end; // zero or last end
					end = start + sliceSize * modifier; // define range of slice

					list = '<' + elemTag; // create a new list
					if (elemTag === 'ol' && i > 0) { // if is a second <ol>
						list += ' start="' + (start + 1).toString() + '"'; // add start attribute
					}
					list += ' />';
					list = $(list);

					list.append(itens.slice(start, end)); // slice the original list and put it on new list
					container.append(list);

					itensLeft -= sliceSize; // decreases total to make division again
					start += 1;
					i += 1;
				}

				$.each(elemAttr, function () {
					container.attr(this.name, this.value); // restore elem attributes
				});

				container.addClass('split-' + i);

				elem.replaceWith(container); // replace splited lists
				containers.push(container[0]);
			}

		});

		return $(containers); // return jQuery container

	};

}(jQuery));