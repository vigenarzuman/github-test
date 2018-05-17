<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
    	return view('welcome');
    }

    public function search($user, $page, $count)
    {
		$url = 'https://api.github.com/search/users?q='. $user .'&per_page='. $count .'&page='. $page;
    	$client = new \GuzzleHttp\Client();
	    $response = $client->request('GET', $url);
	    $followers = $response->getBody()->getContents();
		return $followers;
    }

    public function getFollower($user, $page, $count)
    {
    	$url = 'https://api.github.com/users/'. $user .'/followers?per_page='. $count .'&page='. $page;
    	$client = new \GuzzleHttp\Client();
	    $response = $client->request('GET', $url);
	    $followers = $response->getBody()->getContents();
		return $followers;
    }
}
