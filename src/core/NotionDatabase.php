<?php 
namespace App\core;
use Notion\Notion;
use Notion\Search\Query;

class NotionDatabase{
	private $notion;

	public function __construct() {
		$this->notion = Notion::create(NOTION_SECRET);
	}

	function get_database_by_id( \WP_REST_Request $request) {
	
  
		
		$database_id = $request->get_param("database_id");
	
		$database = $this->notion->databases()->find($database_id);
	
		$result = $this->notion->databases()->queryAllPages($database);
		
		return $result;
	  
		
	}
	
	function get_databases( \WP_REST_Request $request ) {
		
		$query = Query::all()->filterByDatabases();           
		$result = $this->notion->search()->search($query);
		return $result;
	}

	function get_pages( \WP_REST_Request $request ) {
		
		$query = Query::all()->filterByPages();           
		$result = $this->notion->search()->search($query);
		return $result;	

	}
}
