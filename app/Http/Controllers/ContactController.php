<?php

namespace App\Http\Controllers;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\Request;
use Flash;
use App\Mail\ContactAdmin;
use Mail;

class ContactController extends Controller
{
    public function store(ContactFormRequest $request) {
		Mail::to('oussama@portfolio.dev')->send(new ContactAdmin($request));
    }
}
