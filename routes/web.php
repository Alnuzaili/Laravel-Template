<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocalizationController;


Route::post('set-locale', [LocalizationController::class, 'setLocale'])->name('set-locale');

Route::get('/', [HomeController::class, 'index']);
