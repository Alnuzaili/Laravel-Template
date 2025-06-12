<?php

namespace App\Listeners;

use Filament\Facades\Filament;


class UserLocalChangeListener
{
    public function handle(object $event): void
    {
        if(auth()->check()) {
            auth()->user()->update(['locale' => $event->locale]);
        }
    }
}