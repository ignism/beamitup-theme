<?php

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'posts/project.twig' );

Timber::render( $templates, $context );

?>