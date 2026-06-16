<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PendaftaranController;

// Route untuk halaman utama
Route::get('/', function () {
    return Inertia::render('Home');
});

// Route untuk halaman Lokasi
Route::get('/lokasi', function () {
    return Inertia::render('Lokasi');
});

// Route untuk halaman Pendaftaran
Route::get('/daftar', function () {
    return Inertia::render('Pendaftaran');
});

// Route untuk halaman Syarat & Proses
Route::get('/syarat', function () {
    return Inertia::render('syarat_Proses');
});

// Route POST untuk Pendaftaran
Route::post('/daftar', [PendaftaranController::class, 'store']);

// Route Dashboard (butuh auth)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route Profile (butuh auth)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';