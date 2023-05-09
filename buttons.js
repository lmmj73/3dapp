function switchScene(id){
    document.getElementById('home').style.display = 'none';
	document.getElementById('coke').style.display = 'none';
	document.getElementById('sprite').style.display = 'none';
	document.getElementById('pepper').style.display = 'none';

	document.getElementById(id).style.display = 'block';
}

var spinning = false;

function spin(id)
{
	spinning = !spinning;
	document.getElementById(id).setAttribute('enabled', spinning.toString());
}



function animateModel(id)
{
    if(document.getElementById(id).getAttribute('enabled')!= 'true')
        document.getElementById(id).setAttribute('enabled', 'true');
    else
        document.getElementById(id).setAttribute('enabled', 'false');
}

function spin2(id){
    document.getElementById(id).setRotation(180);
}

function wireframe(id)
{
	var e = document.getElementById(id);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function light(id)
{
	lightOn = !lightOn;
	document.getElementById(id).setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}


function camera(id)
{
	document.getElementById(id).setAttribute('bind', 'true');
}

function changeColor(col, id)
{
    document.getElementById(id).setAttribute("diffuseColor", col);
}

function changeOpacity(opacity, id)
{
	//console.log(opacity.toString());
    document.getElementById(id).setAttribute("transparency", opacity.toString());
}

function changeTexture(tex, id)
{
    document.getElementById(id).setAttribute("url", tex);
}

function backColour(col, id)
{    
	document.getElementById(id).setAttribute('skyColor', col);
}