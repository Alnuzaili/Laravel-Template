<?php

namespace App\Listeners;

use App\Models\User;
use Filament\Facades\Filament;


class UserLoggedInListener
{
    public function handle(object $event): void
    {
        if(Filament::auth()->check()) {
            /* @var $user User */
            $user = Filament::auth()->user();
            if($user->locale != null) {
                $locale = $user->locale;
                app()->setLocale($locale);
                session()->put('locale',$locale);
            }else{
                $user->update(['locale' => session()->get('locale') ?? 'ar']);
            }

        }
    }
}