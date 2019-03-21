<?php
/* Template Name: Projecten */ 

$context = Timber::get_context();
$context['page'] = new TimberPost();
$templates = array( 'pages/projecten.twig' );

Timber::render( $templates, $context );

?>