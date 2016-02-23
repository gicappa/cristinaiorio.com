<?php
/*
Template Name: Links
*/
?>

<?php get_subpage_header(); ?>

<?php get_sidebar(); ?>
<style >
#linkcat-4 h2 {
  display: none;
}
li {
	list-style: none;
	list-style-type: none;
}
</style>
	<div id="content" class="narrowcolumn">
    <?php wp_list_bookmarks(); ?>
	</div>

<?php get_footer(); ?>

<!--
  
< ? php get_header(); ? >

<div id="content" class="widecolumn">

<h2>Links:</h2>
<ul>
< ? php wp_list_bookmarks(); ? >
</ul>

</div>

< ? php get_footer(); ? >
-->