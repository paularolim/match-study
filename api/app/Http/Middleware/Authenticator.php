<?php

namespace App\Http\Middleware;

use App\Models\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;

class Authenticator
{
    public function handle(Request $request, \Closure $next)
    {
        try {
            if (!$request->hasHeader('Authorization')) {
                throw new \Exception();
            }

            $authorization = $request->header('Authorization');
            $token = str_replace('Bearer ', '', $authorization);
            $data = JWT::decode($token, env('JWT_KEY'), ['HS256']);

            $user = User::where('email', $data->email)->first();

            if (is_null($user)) {
                throw new \Exception();
            }

            return $next($request);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
}
