<?php
/**
 * Plugin Name:       Gutenpride
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenpride
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
require_once 'vendor/autoload.php';

use Notion\Notion;


$notion = Notion::create("secret_uPBBR6snphU8rKertMWty82DqrUNgGcVe4PJf5fCCSi");


function create_block_gutenpride_block_init() {
	register_block_type( __DIR__ . '/build/output' );
	register_block_type( __DIR__ . '/build/notion-database-value' );
}
add_action( 'init', 'create_block_gutenpride_block_init' );


add_action( 'rest_api_init', function () {
	register_rest_route( 'notion-blocks/v1', '/database/(?P<database_id>[a-zA-Z0-9-]+)', array(
	  'methods' => 'GET',
	  'callback' => 'get_database_by_id',
	) );

	register_rest_route( 'notion-blocks/v1', '/databases', array(
		'methods' => 'GET',
		'callback' => 'get_databases',
	  ) );


  } );

  function get_database_by_id( WP_REST_Request $request ) {
	
  
	// You can get the combined, merged set of parameters:
	$database_id = $request->get_param("database_id");

	$database = $notion->databases()->find();

	$query = Query::create()
		->changePageSize(20);

	$result = $notion->databases()->query($database, $query);
	
	return $result;
  
	
  }

  function get_databases( WP_REST_Request $request ) {
	
	
  
	
  }



