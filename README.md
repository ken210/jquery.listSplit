#jQuery.listSplit

A jQuery plugin to split a list, passing the number of slices as argument. Good to fit lists in bidimensional spaces.

###Features

* Works on `<ol>`, `<ul>` or `<dl>`
* Restore all element attributes in the container `<div>`
* Returns new jQuery container to chain
* Callback for doing awesome stuff

###Cons
* Side effects on nested lists


###Usage

```javascript
$(selector).listSplit(slices[,invert]);
```

Using the following HTML:

```html
<ul class="cities">
	<li>New York</li>
	<li>London</li>
	<li>Tokyo</li>
	<li>São Paulo</li>
	<li>Paris</li>
	<li>Toronto</li>
</ul>

<ol>
	<li>First item</li>
	<li>Second item</li>
	<li>Third item</li>
	<li>Fourth item</li>
	<li>Fifth item</li>
	<li>Sixth item</li>
	<li>Seventh item</li>
	<li>Eighth item</li>
	<li>Nineth item</li>
</ol>

<dl style="color: red" class="profile">
	<dt>Name:</dt>
	<dd>Ken</dd>

	<dt>Gender:</dt>
	<dd>Male</dd>

	<dt>Date of born:</dt>
	<dd>January 7th, 1985</dd>

	<dt>Hair color:</dt>
	<dd>Dark brown</dd>

	<dt>Country:</dt>
	<dd>Brazil</dd>
</dl>
```

The first list can be splited in two:

```javascript
$('ul').listSplit(2);
```

Now we have a `<div>` with two lists and got a brand new class that inform the number of slices

```html
<div class="cities split-2">
	<ul>
		<li>New York</li>
		<li>London</li>
		<li>Tokyo</li>
	</ul>
	<ul>
		<li>São Paulo</li>
		<li>Paris</li>
		<li>Toronto</li>
	</ul>
</div>
```

The second list will be splited in three:

```javascript
$('ol').listSplit(3);
```

On ordered lists, the `start` attributte is added to the lists:

```html
<div class="split-3">
	<ol>
		<li>First item</li>
		<li>Second item</li>
		<li>Third item</li>
	</ol>
	
	<ol start="4">
		<li>Fourth item</li>
		<li>Fifth item</li>
		<li>Sixth item</li>
	</ol>
	
	<ol start="7">
		<li>Seventh item</li>
		<li>Eighth item</li>
		<li>Nineth item</li>
	</ol>
</div>
```

The code works also on direct lists:

```javascript
$('dl').listSplit(2);
```

You dont loose any of your attributes:

```html
<div style="color: red" class="profile split-2">
	<dl>
		<dt>Name:</dt>
		<dd>Ken</dd>
		
		<dt>Gender:</dt>
		<dd>Male</dd>
		
		<dt>Date of born:</dt>
		<dd>January 7th, 1985</dd>
	</dl>
	<dl>
		<dt>Hair color:</dt>
		<dd>Dark brown</dd>
		
		<dt>Country:</dt>
		<dd>Brazil</dd>
	</dl>
</div>
```

If the number of itens are not divisible by the argument passed, the plugin rounds up the first lists.
This behavior can be inverted, passing a second argument `true`

Like this:

```javascript
$('dl').listSplit(2, true);
```

returns:

```html
<div style="color: red" class="profile split-2">
	<dl>
		<dt>Name:</dt>
		<dd>Ken</dd>
		
		<dt>Gender:</dt>
		<dd>Male</dd>
	</dl>
	<dl>
		<dt>Date of born:</dt>
		<dd>January 7th, 1985</dd>
		
		<dt>Hair color:</dt>
		<dd>Dark brown</dd>
		
		<dt>Country:</dt>
		<dd>Brazil</dd>
	</dl>
</div>
```