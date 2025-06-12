<?php

namespace App\Events;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Queue\SerializesModels;

class LoggedIn
{
    use SerializesModels;

    public function __construct(
        protected Authenticatable| Model $user,
    ) {}

    public function getUser(): Authenticatable
    {
        return $this->user;
    }
}