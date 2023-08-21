<?php


use App\Core\CustomEndpointApi;
use App\Core\NotionDatabase;
//require_once PLUGIN_DIRECTORY_URL . '/src/core/class-customendpointapi.php';
//require_once PLUGIN_DIRECTORY_URL . '/src/core/class-notiondatabase.php';

class PluginInit{

	private static $instance;

	public static function get_instance()
	{
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }  
	public function run(){
		add_filter('init', array($this, 'define_constants'));

		add_filter('init', array($this, 'register_blocks'));

		add_filter('rest_api_init', array($this, 'register_endpoints'));
	}  

	function define_constants(){
		
	}
	
	function register_blocks() {
		register_block_type( PLUGIN_DIRECTORY_URL . '/build/blocks/notion-database-value' );
	}

	function register_endpoints(){
			
		$notion = new NotionDatabase();
		new CustomEndpointApi("databases/(?P<database_id>[a-zA-Z0-9-]+)",[$notion,"get_database_by_id"]);
		new CustomEndpointApi("databases",[$notion,"get_databases"]);
	}

}

