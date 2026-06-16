<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PendaftaranController; 
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/tentang', function () {
    return Inertia::render('tentang_kami'); 
});

Route::get('/lokasi', function () {
    return Inertia::render('Lokasi');
});

Route::get('/syarat', function () {
    return Inertia::render('syarat_Proses'); 
});

Route::get('/daftar', function () {
    return Inertia::render('Pendaftaran');
});
Route::post('/daftar', [PendaftaranController::class, 'store']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';