<?php

namespace App\Providers;

use App\Events\LoggedIn;
use App\Listeners\UserLocalChangeListener;
use App\Listeners\UserLoggedInListener;
use BezhanSalleh\FilamentLanguageSwitch\Enums\Placement;
use BezhanSalleh\FilamentLanguageSwitch\Events\LocaleChanged;
use BezhanSalleh\FilamentLanguageSwitch\LanguageSwitch;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::before(function ($user, $ability) {
            return $user->hasRole('super_admin') ? true : null;
        });

        Event::listen(
            LocaleChanged::class,
            [UserLocalChangeListener::class, 'handle']
        );

        Event::listen(
            LoggedIn::class,
            [UserLoggedInListener::class, 'handle']
        );
        LanguageSwitch::configureUsing(function (LanguageSwitch $switch) {
            $switch
                ->visible(outsidePanels: true)
                ->userPreferredLocale(fn() => Filament::auth()->user()->locale ?? 'ar')
                // ->renderHook(PanelsRenderHook::USER_MENU_AFTER)
                ->outsidePanelPlacement(Placement::TopLeft)
                ->locales(['ar', 'en']); // also accepts a closure
        });
    }
}