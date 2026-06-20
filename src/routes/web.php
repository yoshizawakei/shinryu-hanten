<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;
use App\Models\Menu;
use App\Models\Gallery;
use App\Models\SiteSetting;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Top', [
        'menus' => Menu::where('is_recommended', true)
            ->orderBy('sort_order')
            ->take(6)
            ->get(),

        'galleries' => Gallery::orderBy('sort_order')
            ->take(6)
            ->get(),

        'setting' => SiteSetting::first(),
        'url'     => url('/'),
    ]);
});

Route::get('/menu', function () {
    return Inertia::render('Menu', [
        'menus'   => Menu::orderBy('sort_order')->get(),
        'setting' => SiteSetting::first(),
        'url'     => url('/menu'),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About', [
        'galleries' => Gallery::orderBy('sort_order')->take(6)->get(),
        'setting'   => SiteSetting::first(),
        'url'       => url('/about'),
    ]);
});

Route::get('/access', function () {
    return Inertia::render('Access', [
        'setting' => SiteSetting::first(),
        'url'     => url('/access'),
    ]);
});

/* ── Sitemap ── */
Route::get('/sitemap.xml', function () {
    $urls = ['/', '/menu', '/about', '/access'];
    $xml  = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
    foreach ($urls as $path) {
        $xml .= "  <url>\n";
        $xml .= '    <loc>' . url($path) . "</loc>\n";
        $xml .= "    <changefreq>weekly</changefreq>\n";
        $xml .= '    <priority>' . ($path === '/' ? '1.0' : '0.8') . "</priority>\n";
        $xml .= "  </url>\n";
    }
    $xml .= '</urlset>';

    return Response::make($xml, 200, ['Content-Type' => 'application/xml']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
