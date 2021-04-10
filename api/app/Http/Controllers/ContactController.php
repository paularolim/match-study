<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Ramsey\Uuid\Rfc4122\UuidV4;

class ContactController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function store(Request $request, $user_id)
    {
        $this->validate($request, [
            'contactId' => 'required|string',
        ]);

        try {
            $contact = new Contact;
            $contact->id = UuidV4::uuid4();
            $contact->user_id = $user_id;
            $contact->contact_id = $request->input('contactId');
            $contact->blocked = false;
            $contact->chat_actived = false;

            $contact->save();

            return response()->json(['contact' => $contact, 'message' => 'Contact created successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Contact creation failed', 'error' => $e]);
        }
    }

    public function showContacts($id)
    {
        try {
            $user = User::find($id);
            $contacts = $user->contacts;
            $user->contacts = $contacts;

            return $user;
        } catch (\Exception $e) {
            return [];
        }
    }
}
