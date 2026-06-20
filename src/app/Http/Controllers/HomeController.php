<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Menu;
use App\Models\SiteSetting;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'menus' => Menu::where('is_recommended', true)
                ->orderBy('sort_order')
                ->get(),

            'gallery' => Gallery::orderBy('sort_order')->get(),

            'setting' => SiteSetting::first(),
        ]);
    }
}