from django.shortcuts import render, redirect
from .models import Mecanico, Detalle_mecanico
from .forms import MecanicoForm, DetalleMecanicoForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import render, get_object_or_404

def inicio(request):
    mecanicos = Mecanico.objects.all()
    return render(request, 'paginas/index.html', {'mecanicos': mecanicos})

def servicios(request):
    return render(request, 'paginas/servicios.html')

def contacto(request):
    return render(request, 'paginas/contacto.html')

#MECANICO
def mecanico(request):
    mecanicos = Mecanico.objects.all()
    return render(request, 'paginas/jorge_gonzalez.html', {'mecanicos': mecanicos})

#MECANICO
@login_required
def crearmec(request):
    formulario = MecanicoForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('inicio')
    return render(request, 'mecanicos/crearcard.html', {'formulario':formulario})

#MECANICO
@login_required
def editarmec(request, id):
    mecanico = Mecanico.objects.get(id=id)
    formulario = MecanicoForm(request.POST or None, request.FILES or None, instance=mecanico)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('inicio')
    return render(request, 'mecanicos/crearcard.html', {'formulario':formulario})

#MECANICO
@login_required
def eliminarmec(request, id):
    mecanico = Mecanico.objects.get(id=id)
    mecanico.delete()
    return redirect('inicio')

#DETALLE
def detalle_mecanico(request):
    detalles = Detalle_mecanico.objects.all()
    return render(request, 'paginas/detalle_mecanico.html', {'detalles': detalles})

#DETALLE
@login_required
def creardetalle(request):
    formulario = DetalleMecanicoForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('detalle_mecanico')
    return render(request, 'mecanicos/creardetalle.html', {'formulario': formulario})

#DETALLE
@login_required
def editardet(request, id):
    detalles = Detalle_mecanico.objects.get(id=id)
    formulario = DetalleMecanicoForm(request.POST or None, request.FILES or None, instance=detalles)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('detalle_mecanico')
    return render(request, 'mecanicos/creardetalle.html', {'formulario':formulario})

#DETALLE
@login_required
def eliminardet(request, id):
    detalles = Detalle_mecanico.objects.get(id=id)
    detalles.delete()
    return redirect('detalle_mecanico')