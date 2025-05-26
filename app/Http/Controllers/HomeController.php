<?php

namespace App\Http\Controllers;

use App\Settings\GeneralSettings;
use Firefly\FilamentBlog\Http\Controllers\PostController;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{


    public function index()
    {
        return Inertia::render('index');
    }
}
