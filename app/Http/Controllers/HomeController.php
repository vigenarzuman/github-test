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
		$headers = [
			'Authorization' => 'token 98b971992f23b93944d365210f898a8b868605dc',
		];
		$url = 'https://api.github.com/search/users?q='. $user .'&per_page='. $count .'&page='. $page;
    	$client = new \GuzzleHttp\Client();
	    $response = $client->request('GET', $url, ['headers' => $headers]);
	    $users = $response->getBody()->getContents();
		return $users;
    }

    public function getFollower($user, $page, $count)
    {
		
		$headers = [
			'Authorization' => 'token 98b971992f23b93944d365210f898a8b868605dc',
		];
    	$url = 'https://api.github.com/users/'. $user .'/followers?per_page='. $count .'&page='. $page;
    	$client = new \GuzzleHttp\Client();
	    $response = $client->request('GET', $url, ['headers' => $headers]);
	    $followers = $response->getBody()->getContents();
		return $followers;
    }
}
