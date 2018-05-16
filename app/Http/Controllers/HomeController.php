<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GrahamCampbell\GitHub\Facades\GitHub;

class HomeController extends Controller
{
    public function index()
    {
    	return view('welcome');
    }

    public function search($slug)
    {
    	$users = GitHub::api('search')->users($slug);
		return $users;
    }

    public function getFollower($slug)
    {
    	$followers = GitHub::api('user')->followers($slug);
		return $followers;
    }
}
