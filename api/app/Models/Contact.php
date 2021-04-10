<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

    public $timestamps = false;

    protected $fillable = ['contact_id', 'user_id', 'blocked', 'chat_actived'];
    protected $casts = ['id' => 'string'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function hasUser()
    {
        return $this->hasOne(User::class, 'contact_id');
    }
}
