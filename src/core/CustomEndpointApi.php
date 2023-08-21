<?php 


namespace App\core;
class CustomEndpointApi{

	CONST  PREFIX = 'notion-blocks';
	CONST VERSION = "v1";
	private $endpoint,$method,$callback;

	public function __construct(string $endpoint,$callback,string $method = "GET") {
		$this->endpoint = $endpoint;
		$this->method = $method;
		$this->callback = $callback;
		$this->register();
	}

	function register(){
		

		register_rest_route( CustomEndpointApi::PREFIX.'/'.CustomEndpointApi::VERSION, '/'.$this->endpoint, array(
			'methods' => $this->method,
			'callback' => $this->callback,
		  ) );
		  
		  
	}
}


