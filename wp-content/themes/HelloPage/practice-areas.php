<?php

function testingshortcode(){
        $query = new WP_Query(
            array(
                'post_type' => 'practice areas',
                'post_status' => 'publish',
                'post_per_page'=> -1,
                'order'=> 'ASC',
                'Orderedby'=>'menu_order'
            )
            );
    $links = '';
    while($query->have_posts()):
        $query->the_post();
        
        $links .= '<a href="'.get_the_permalink().'"title="'.get_the_title().'">'.get_the_title().'</a><br>';
    endwhile;
        
    wp_reset_postdata();
    
    
    return $links;
}
add_shortcode('links','testingshortcode');
