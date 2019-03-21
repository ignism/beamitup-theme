<?php
/* Template Name: Front Page */ 

$context = Timber::get_context();
$context['page'] = new TimberPost();
$templates = array( 'pages/home.twig' );

Timber::render( $templates, $context );

?>