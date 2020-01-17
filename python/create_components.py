import os
import warnings
import sys

path_archivos_base = './component'
nombre_componente = 'funcional_template.jsx'
nombre_index = 'index_template.js'
nombre_sass = 'style.module.js'
clave_componente = 'COMPONENT_NAME'
carpeta_componentes = 'components'

def leerTemplate( templatePath ):
    tempArchivo = open( templatePath, 'r' )
    return tempArchivo.read()
    
def cambiarPalabras( template, palabras_clave, palabras_nuevas ):

    if( len( palabras_clave ) == len( palabras_nuevas ) ):
        for ( palabra_clave, palabra_nueva ) in zip( palabras_clave, palabras_nuevas ):
            template = template.replace( palabra_clave, palabra_nueva  )
    else:
        raise ZeroDivisionError #cambiar en un futuro pls!
    
    return template

def copiarTemplate( path, template, name_template ):
    path = os.path.join( path, name_template )
    fichero = open( path, 'w' )
    
    fichero.write( template )
    
    fichero.close()

def createFolder( path, folder_name ):
    try:
        os.mkdir( os.path.join( path, folder_name ) )
    except:
        pass

def verificarCarpeta( path, folder_name ):
    if( os.path.isdir( os.path.join( path, folder_name ) ) ):
        return True
    return False

def crearComponente( path, component_name ):
    
    if( verificarCarpeta( path, component_name ) ):
        raise ZeroDivisionError #cambiar
    
    component_name = component_name
    
    createFolder( path, component_name )
    
    path = os.path.join( path, component_name )

    index_template_dir = os.path.join( path_archivos_base, nombre_index )

    index_template = leerTemplate( index_template_dir )

    index = cambiarPalabras( index_template, [ clave_componente ], [ component_name ] )
    
    component_template_dir = os.path.join( path_archivos_base, nombre_componente )
    
    component_template = leerTemplate( component_template_dir )
    
    component = cambiarPalabras( component_template, [ clave_componente ], [ component_name ] )
    
    copiarTemplate( path, index, 'index.js' )
    
    copiarTemplate( path, component, component_name + '.jsx')
    
    copiarTemplate( path, '', 'style.module.sass')
    
    copiarTemplate( path, '', 'style.module.css')
    
    
args = sys.argv[1:]

react_app = args[0]

react_app_src = os.path.join( react_app, 'src' )

if ( not verificarCarpeta( react_app_src, carpeta_componentes ) ):
     createFolder( react_app_src, carpeta_componentes )

react_app_component = os.path.join( react_app_src, carpeta_componentes )

if( len( args ) == 3 ):
    if( args[2] ):
        nombre_componente = 'component_template.jsx'


component_name = ''
for palabra in args[1].split():
    component_name += palabra.capitalize() 

crearComponente( react_app_component, component_name )
 
   